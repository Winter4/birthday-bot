import pino from "pino";

export type LoggerClient = ReturnType<typeof pino>;

export function getLoggerClient(): LoggerClient {
  return pino({});
}
