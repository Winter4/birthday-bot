import { getDatabaseClient, DatabaseClient } from "./database";
import { getLoggerClient, LoggerClient } from "./logger";
import { AppConfig } from "../config/index";

export type AppClients = {
  logger: LoggerClient;
  database: DatabaseClient;
};

export function getClients(config: AppConfig): AppClients {
  const clients: AppClients = {
    logger: getLoggerClient(),
    database: getDatabaseClient(config.database),
  };

  if (clients.database)
    clients.logger.info(
      "DB client is salt and spicy. Got a sunbeam through your prisma!"
    );

  return clients;
}
