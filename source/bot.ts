// environment variables
import "dotenv/config";
import { Bot } from "grammy";

import { getClients } from "./clients";
import { getConfig } from "./config";

import type { CustomContext } from "./types";
import { middlewares } from "./middlewares";
import { handleErrors } from "./error-handler";

async function main() {
  // global app config
  const config = getConfig();
  // 3rd party clients, that should be inited
  const clients = getClients(config);

  // init bot instance
  const bot = new Bot<CustomContext>(config.telegram.botToken);

  // apply pre-scenes middlewares
  bot.use(...middlewares(clients));

  // error handler
  bot.catch(handleErrors(clients.logger));

  // run the bot
  bot.start();
  clients.logger.info("Bot is ready to handle birthdays!🎂");
}

main();
