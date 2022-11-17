import { PrismaClient } from "@prisma/client";
import { DatabaseConfig } from "../config/database";

export type DatabaseClient = PrismaClient;

export function getDatabaseClient(config: DatabaseConfig): DatabaseClient {
  const client = config.logging
    ? new PrismaClient({ log: ["query"] })
    : new PrismaClient();

  return client;
}
