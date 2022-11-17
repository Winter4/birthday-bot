import { DataSource } from "typeorm";
import { DatabaseConfig } from "../config/database";

export type DatabaseClient = DataSource;

export async function getDatabaseClient(
  config: DatabaseConfig
): Promise<DatabaseClient> {
  const client = new DataSource({
    type: "postgres",
    host: config.host,
    port: config.port,
    username: config.username,
    password: config.password,
    database: config.database,
    logging: config.logging,

    entities: [],
  });

  try {
    await client.initialize();
  } catch (error: unknown) {
    console.error(error);
  }

  return client;
}
