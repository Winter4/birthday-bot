import type { Context } from "grammy";
import type { LoggerClient } from "./clients/logger";
import type { Repository } from "typeorm";
import type { User } from "./models/user.model";

// declare custom context type
export type CustomContext = Context & {
  logger: LoggerClient;
  repos: {
    user: Repository<User>;
  };
};
