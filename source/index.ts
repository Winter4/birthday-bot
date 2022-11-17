// environment variables
import "dotenv/config";
// some API shim for typeORM proper working
import "reflect-metadata";

import { getConfig } from "./config";
import { connectDatabase } from "./database/connection";

async function main() {
  // global app config
  const config = getConfig();

  const db = await connectDatabase(config.database);
}

main();
