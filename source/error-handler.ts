import { BotError } from "grammy";
import { LoggerClient } from "./clients/logger";

export function handleErrors(logger: LoggerClient) {
  return (error: BotError) => {
    logger.error(error.error);
  };
}
