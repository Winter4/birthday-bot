import { getDatabaseClient, DatabaseClient } from "./database";
import { getLoggerClient, LoggerClient } from "./logger";
import { AppConfig } from "../config/index";
import { ClientRequest } from "http";

export type AppClients = {
  logger: LoggerClient;
  database: DatabaseClient;
};

export async function getClients(config: AppConfig): Promise<AppClients> {
  const clients: AppClients = {
    logger: getLoggerClient(),
    database: await getDatabaseClient(config.database),
  };

  if (clients.database)
    clients.logger.info("Database client is salt and spicy");

  return clients;
}
