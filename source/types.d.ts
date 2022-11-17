import type { Context } from "grammy";
import type { LoggerClient } from "./clients/logger";
import type { PrismaClient } from "@prisma/client";

// declare custom context type
export type CustomContext = Context & {
  logger: LoggerClient;
  prisma: PrismaClient;
};
