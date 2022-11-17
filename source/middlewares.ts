import { Bot, Context, NextFunction } from "grammy";
import { AppClients } from "./clients/index";
import { LoggerClient } from "./clients/logger";

function useLogger(bot: Bot, logger: LoggerClient) {
  bot.use((ctx: Context, next: NextFunction) => {
    logger.info(ctx.update);
  });
}

export function useMiddlewares(bot: Bot, clients: AppClients) {
  useLogger(bot, clients.logger);
}
