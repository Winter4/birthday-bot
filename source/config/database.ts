export type DatabaseConfig = {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  logging: boolean;
};

export function getDatabaseConfig(): DatabaseConfig {
  const config: DatabaseConfig = {
    host: process.env.DB_HOST ?? "",
    port: Number(process.env.DB_PORT) ?? 0,
    username: process.env.DB_USER ?? "",
    password: process.env.DB_PASSWORD ?? "",
    database: process.env.DB_DATABASE ?? "",
    logging: Boolean(Number(process.env.DB_LOGS)) ?? false,
  };

  if (!config.host) throw new Error("Invalid DB host: " + config.host);
  if (!config.port) throw new Error("Invalid DB port: " + config.port);
  if (!config.username) throw new Error("Invalid DB user: " + config.username);
  if (!config.password)
    throw new Error("Invalid DB password: " + config.password);
  if (!config.database)
    throw new Error("Invalid DB database: " + config.database);

  return config;
}
