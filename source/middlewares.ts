import type { NextFunction } from "grammy";
import type { CustomContext } from "./types";
import type { AppClients } from "./clients/index";

function extendContext(clients: AppClients) {
  return (ctx: CustomContext, next: NextFunction) => {
    ctx.logger = clients.logger;
    ctx.prisma = clients.database;

    return next();
  };
}

function logUpdates(ctx: CustomContext, next: NextFunction) {
  ctx.logger.info(ctx.update);
  return next();
}

export function middlewares(clients: AppClients) {
  return [extendContext(clients), logUpdates];
}
