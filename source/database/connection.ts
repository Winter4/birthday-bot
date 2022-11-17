import { DataSource } from "typeorm";
import { DatabaseConfig } from "../config/database";

export async function connectDatabase(
  config: DatabaseConfig
): Promise<DataSource> {
  const datasource = new DataSource({
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
    await datasource.initialize();
  } catch (error: unknown) {
    console.error(error);
  }

  return datasource;
}
