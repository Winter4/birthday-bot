import { getDatabaseClient, DatabaseClient } from "./database";
import { getLoggerClient, LoggerClient } from "./logger";
import { AppConfig } from "../config/index";

type AppClients = {
  logger: LoggerClient;
  database: DatabaseClient;
};

export async function getClients(config: AppConfig): Promise<AppClients> {
  return {
    logger: getLoggerClient(),
    database: await getDatabaseClient(config.database),
  };
}
