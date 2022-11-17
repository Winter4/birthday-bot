// environment variables
import "dotenv/config";
// some API shim for typeORM proper working
import "reflect-metadata";
import { getClients } from "./clients";

import { getConfig } from "./config";

async function main() {
  // global app config
  const config = getConfig();
  // 3rd party clients, that should be inited
  const clients = await getClients(config);
}

main();
