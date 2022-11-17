export type TelegramConfig = {
  botToken: string;
};

export function getTelegramConfig(): TelegramConfig {
  const config: TelegramConfig = {
    botToken: process.env.TG_BOT_TOKEN ?? "",
  };

  if (!config.botToken)
    throw new Error("Invalid TG bot token: " + config.botToken);

  return config;
}
