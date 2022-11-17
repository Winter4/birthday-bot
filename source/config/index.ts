import exp from "constants";
import { getDatabaseConfig, DatabaseConfig } from "./database";

type AppConfig = {
  database: DatabaseConfig;
};

export function getConfig(): AppConfig {
  return {
    database: getDatabaseConfig(),
  };
}
