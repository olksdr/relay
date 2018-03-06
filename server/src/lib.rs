//! Implements basics for the protocol.
extern crate ctrlc;
extern crate failure;
#[macro_use]
extern crate failure_derive;
extern crate futures;
extern crate hyper;
#[macro_use]
extern crate lazy_static;
#[macro_use]
extern crate log;
extern crate parking_lot;
extern crate regex;
extern crate smith_aorta;
extern crate smith_common;
extern crate smith_config;
extern crate smith_trove;

mod service;
mod errors;

pub use service::*;
pub use errors::*;
