import { z } from "zod";
import { getExample, listComponents } from "../lib/catalog";
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

export const getExampleTool: Tool<{ componentList: string[] }> = {
  async ctx(config) {
    if (config.packages.length === 0) {
      return { componentList: [] };
    }
    return { componentList: componentNames(config) };
  },
  description:
    "Get the Storybook stories source for a Pisagor component. Optionally filter by example id from list_examples.",
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
          component: componentSchema.describe(
            "Component name (kebab-case), e.g. button.",
          ),
          exampleId: z
            .string()
            .optional()
            .describe(
              "Optional example id from list_examples (e.g. default or sizes). When omitted, returns the full stories file.",
            ),
          ...(multi
            ? { framework: frameworkInputSchema(config.frameworks) }
            : {}),
        },
      },
      async (args: {
        component: string;
        exampleId?: string;
        framework?: Framework;
      }) => {
        if (config.packages.length === 0) {
          return {
            content: [{ text: INSTALL_GUIDE, type: "text" as const }],
          };
        }

        const framework = resolveFramework(config, args.framework);
        const example = getExample(config, {
          component: args.component,
          exampleId: args.exampleId,
          framework,
        });

        return {
          content: [
            {
              text: JSON.stringify(example, null, 2),
              type: "text" as const,
            },
          ],
        };
      },
    );
  },
  name: "get_example",
};
