import { getDatabaseConfig, DatabaseConfig } from "./database";
import { getTelegramConfig, TelegramConfig } from "./telegram";

export type AppConfig = {
  database: DatabaseConfig;
  telegram: TelegramConfig;
};

export function getConfig(): AppConfig {
  return {
    database: getDatabaseConfig(),
    telegram: getTelegramConfig(),
  };
}
