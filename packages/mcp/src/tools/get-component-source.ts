import { z } from "zod";
import { getComponentSource, listComponents } from "../lib/catalog";
import { INSTALL_GUIDE } from "../lib/resolve";
import {
  type Framework,
  frameworkInputSchema,
  resolveFramework,
  type Tool,
  type ToolConfig,
} from "../lib/types";

function componentNames(config: ToolConfig): string[] {
  const names = new Set<string>();
  for (const framework of config.frameworks) {
    for (const entry of listComponents(config, framework)) {
      names.add(entry.name);
    }
  }
  return [...names].sort();
}

export const getComponentSourceTool: Tool<{ componentList: string[] }> = {
  async ctx(config) {
    if (config.packages.length === 0) {
      return { componentList: [] };
    }
    return { componentList: componentNames(config) };
  },
  description:
    "Get the implementation source files for a Pisagor component (tsx/ts/astro and context modules).",
  exec(server, { ctx, name, description, config }) {
    const multi = config.frameworks.length > 1;
    const componentSchema =
      ctx.componentList.length > 0
        ? z.enum(ctx.componentList as [string, ...string[]])
        : z.string();

    server.registerTool(
      name,
      {
        description,
        inputSchema: {
          component: componentSchema.describe("Component name (kebab-case), e.g. button."),
          ...(multi ? { framework: frameworkInputSchema(config.frameworks) } : {}),
        },
      },
      async (args: { component: string; framework?: Framework }) => {
        if (config.packages.length === 0) {
          return {
            content: [{ text: INSTALL_GUIDE, type: "text" as const }],
          };
        }

        const framework = resolveFramework(config, args.framework);
        const source = getComponentSource(config, framework, args.component);

        return {
          content: [
            {
              text: JSON.stringify(source, null, 2),
              type: "text" as const,
            },
          ],
        };
      },
    );
  },
  name: "get_component_source",
};
