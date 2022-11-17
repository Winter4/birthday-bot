import { getDatabaseConfig, DatabaseConfig } from "./database";

export type AppConfig = {
  database: DatabaseConfig;
};

export function getConfig(): AppConfig {
  return {
    database: getDatabaseConfig(),
  };
}
