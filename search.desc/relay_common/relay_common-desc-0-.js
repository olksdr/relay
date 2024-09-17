searchState.loadedDescShard("relay_common", 0, "Common functionality for the sentry relay.\nRepresents an auth header.\nRepresents a Sentry dsn.\nunencrypted HTTP scheme (should not be used)\nencrypted HTTPS scheme\nraised the project id is invalid.\nraised the scheme is invalid / unsupported.\nraised on completely invalid urls\nRaised if the version value is invalid\nRaised if the public key is missing entirely\nraised the project is is missing (first path component)\nraised if the username (public key) portion is missing.\nRaised if the auth header is not indicating sentry auth\nRepresents an auth header parsing error.\nRepresents a dsn url parsing error.\nRepresents the scheme of an url http/https.\nReturns the client’s agent\nReturns the default port for this scheme.\nImplements FromStr and Display on a flat/C-like enum such …\nReturns the API URL for Envelope submission.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates an auth header from key value pairs.\nCreates an auth header from a query string.\nSerializable glob patterns for the API.\nAlternative implementation of serializable glob patterns.\nReturns the host\nHelper macro to implement string based deserialization.\nHelper macro to implement string based serialization.\nHelper macro to implement string based serialization and …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if the authentication implies public auth (no …\nReturns the path\nReturns the port\nReturns the project_id\nReturns the public key\nReturns the public_key\nReturns the scheme\nReturns the client’s secret if it authenticated with a …\nReturns secret_key\nReturns the submission API URL.\nUtilities to deal with date-time types. (DateTime, …\nReturns the timestamp the client defined\nConverts the dsn into an auth object.\nReturns the protocol version the client speaks\nA simple glob matcher.\n<code>GlobBuilder</code> provides the posibility to fine tune the final …\nHelper for glob matching\nWrapper type around the raw string pattern and the <code>Glob</code>.\nAdds a new glob to the matcher\nReturns the glob pattern as string.\nCreate a new <code>Glob</code> from this builder.\nCreates the <code>GlobBuilder</code>, which can be fine-tunned using …\nEnable capture groups for <code>**</code> in the pattern.\nEnable capture groups for <code>?</code> in the pattern.\nEnable capture groups for <code>*</code> in the pattern.\nReturns the compiled version of the <code>Glob</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nChecks if some value matches the glob.\nChecks if the value matches and returns the wildcard …\nMatches a string against the stored glob and get the …\nCreate a new builder with all the captures enabled by …\nCreates a new glob from a string.\nInitializes an empty matcher\nCreate a new <code>LazyGlob</code> from the raw string.\nReturns the pattern as str.\nCurrently support replacing only all <code>*</code> in the input string …\nMatches a string against the stored globs.\nA list of patterns for glob matching.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if the list of patterns is empty.\nReturns <code>true</code> if any of the patterns match the given …\nCreates a new\nAn error returned from parsing <code>UnixTimestamp</code>.\nA unix timestamp (full seconds elapsed since 1970-01-01 …\nReturns the timestamp as chrono datetime.\nReturns the number of seconds since the UNIX epoch start.\nReturns the positive number of milliseconds contained by …\nReturns the number of milliseconds contained by this …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a unix timestamp from the given chrono <code>DateTime</code>.\nConverts the given <code>Instant</code> into a UNIX timestamp.\nCreates a unix timestamp from the given number of seconds.\nCreates a unix timestamp from the given system time.\nConverts an <code>Instant</code> into a <code>DateTime</code>.\nConverts an <code>Instant</code> into a <code>SystemTime</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the current timestamp.")