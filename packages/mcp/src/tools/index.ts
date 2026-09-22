import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import type { Tool, ToolConfig } from "../lib/types";
import { getComponentSourceTool } from "./get-component-source";
import { getExampleTool } from "./get-example";
import { getRecipeTool } from "./get-recipe";
import { listComponentsTool } from "./list-components";
import { listExamplesTool } from "./list-examples";

const tools: Tool[] = [
  listComponentsTool,
  listExamplesTool,
  getExampleTool,
  getComponentSourceTool,
  getRecipeTool,
];

const registered = new Set<string>();

export async function initializeTools(server: McpServer, config: ToolConfig) {
  await Promise.all(
    tools.map(async (tool) => {
      if (registered.has(tool.name)) {
        return;
      }
      registered.add(tool.name);
      const ctx = (await tool.ctx?.(config)) ?? undefined;
      await tool.exec(server, {
        config,
        ctx,
        description: tool.description,
        name: tool.name,
      });
    }),
  );
}
