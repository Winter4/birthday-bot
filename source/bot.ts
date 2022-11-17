// environment variables
import "dotenv/config";
// some API shim for typeORM proper working
import "reflect-metadata";
import { Bot, Context } from "grammy";

import { getClients } from "./clients";
import { getConfig } from "./config";
import { useMiddlewares } from "./middlewares";

async function main() {
  // global app config
  const config = getConfig();
  // 3rd party clients, that should be inited
  const clients = await getClients(config);

  const bot = new Bot(config.telegram.botToken);

  useMiddlewares(bot, clients);

  bot.start();
  clients.logger.info("Bot is ready to handle birthdays!🎂");
}

main();
