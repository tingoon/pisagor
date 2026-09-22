#!/usr/bin/env bun
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { discoverPackages } from "./lib/resolve";
import { server } from "./server";
import { initializeTools } from "./tools/index";

async function main() {
  const config = discoverPackages();
  await initializeTools(server, config);

  const transport = new StdioServerTransport();
  await server.connect(transport);

  const label =
    config.packages.length === 0
      ? "no packages — install guide active"
      : config.packages.map((pkg) => pkg.name).join(", ");
  console.error(`Pisagor MCP Server (${label}) running on stdio`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
