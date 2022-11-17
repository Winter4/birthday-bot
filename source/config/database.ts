export type DatabaseConfig = {
  url: string;
  logging: boolean;
};

export function getDatabaseConfig(): DatabaseConfig {
  const config: DatabaseConfig = {
    url: process.env.DB_URL ?? "",
    logging: Boolean(Number(process.env.DB_LOGS)) ?? false,
  };

  if (!config.url) throw new Error("Invalid DB URL: " + config.url);

  return config;
}
