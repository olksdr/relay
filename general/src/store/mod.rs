//! Utility code for sentry's internal store.
use std::collections::BTreeSet;
use std::sync::Arc;

use serde::{Deserialize, Serialize};
use serde_json::Value;

use crate::processor::{ProcessingState, Processor};
use crate::protocol::{Event, IpAddr};
use crate::types::{Meta, ValueAction};

mod event_error;
mod geo;
mod legacy;
mod normalize;
mod remove_other;
mod schema;
mod trimming;
mod user_agent;

pub use crate::store::geo::GeoIpLookup;
pub use crate::store::user_agent::UA_PARSER;

/// The config for store.
#[derive(Serialize, Deserialize, Debug, Default)]
#[serde(default)]
pub struct StoreConfig {
    pub project_id: Option<u64>,
    pub client_ip: Option<IpAddr>,
    pub client: Option<String>,
    pub key_id: Option<String>,
    pub protocol_version: Option<String>,
    pub grouping_config: Option<Value>,

    pub valid_platforms: BTreeSet<String>, // TODO(ja): Pending removal
    pub max_secs_in_future: Option<i64>,
    pub max_secs_in_past: Option<i64>,
    pub enable_trimming: Option<bool>,

    /// When `true`, it is assumed the input already ran through normalization with
    /// is_renormalize=false. `None` equals false.
    pub is_renormalize: Option<bool>,

    /// Overrides the default flag for other removal.
    pub remove_other: Option<bool>,
}

/// The processor that normalizes events for store.
pub struct StoreProcessor<'a> {
    config: Arc<StoreConfig>,
    normalize: normalize::NormalizeProcessor<'a>,
}

impl<'a> StoreProcessor<'a> {
    /// Creates a new normalization processor.
    pub fn new(config: StoreConfig, geoip_lookup: Option<&'a GeoIpLookup>) -> Self {
        let config = Arc::new(config);
        StoreProcessor {
            normalize: normalize::NormalizeProcessor::new(config.clone(), geoip_lookup),
            config,
        }
    }

    /// Returns a reference to the config.
    pub fn config(&self) -> &StoreConfig {
        &self.config
    }
}

impl<'a> Processor for StoreProcessor<'a> {
    fn process_event(
        &mut self,
        event: &mut Event,
        meta: &mut Meta,
        state: &ProcessingState<'_>,
    ) -> ValueAction {
        let mut action = ValueAction::Keep
            // Convert legacy data structures to current format
            .and_then(|| legacy::LegacyProcessor.process_event(event, meta, state));

        let is_renormalize = self.config.is_renormalize.unwrap_or(false);
        let remove_other = self.config.remove_other.unwrap_or(!is_renormalize);

        if !is_renormalize {
            action = action
                // Check for required and non-empty values
                .and_then(|| schema::SchemaProcessor.process_event(event, meta, state))
                // Normalize data in all interfaces
                .and_then(|| self.normalize.process_event(event, meta, state));
        }

        if remove_other {
            action = action
                // Remove unknown attributes at every level
                .and_then(|| remove_other::RemoveOtherProcessor.process_event(event, meta, state));
        }

        if !is_renormalize {
            action = action
                // Add event errors for top-level keys
                .and_then(|| event_error::EmitEventErrors::new().process_event(event, meta, state));
        }

        // Trim large strings and databags down
        action.and_then(|| match self.config.enable_trimming {
            Some(false) => ValueAction::Keep,
            _ => trimming::TrimmingProcessor::new().process_event(event, meta, state),
        })
    }
}
