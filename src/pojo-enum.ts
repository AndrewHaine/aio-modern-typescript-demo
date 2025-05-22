type ObjectValues<T> = T[keyof T];

const LOG_LEVEL = {
  DEBUG: "DEBUG",
  WARNING: "WARNING",
  ERROR: "ERROR",
} as const;

type LogLevel = ObjectValues<typeof LOG_LEVEL>;

const CURRENT_LOG_LEVEL: LogLevel = LOG_LEVEL.DEBUG;

console.log(`The current log level is ${CURRENT_LOG_LEVEL}`);
