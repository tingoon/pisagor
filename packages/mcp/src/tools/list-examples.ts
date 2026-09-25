import { z } from "zod";
import { listComponents, listExamples } from "../lib/catalog";
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

export const listExamplesTool: Tool<{ componentList: string[] }> = {
  async ctx(config) {
    if (config.packages.length === 0) {
      return { componentList: [] };
    }
    return { componentList: componentNames(config) };
  },
  description:
    "List Storybook story examples for a Pisagor component. Prefer list_components first.",
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
            "Component name (kebab-case), e.g. button or date-picker.",
          ),
          ...(multi
            ? { framework: frameworkInputSchema(config.frameworks) }
            : {}),
        },
      },
      async (args: { component: string; framework?: Framework }) => {
        if (config.packages.length === 0) {
          return {
            content: [{ text: INSTALL_GUIDE, type: "text" as const }],
          };
        }

        const framework = resolveFramework(config, args.framework);
        const examples = listExamples(config, framework, args.component);

        return {
          content: [
            {
              text: JSON.stringify(
                {
                  component: args.component,
                  count: examples.length,
                  examples,
                  framework,
                },
                null,
                2,
              ),
              type: "text" as const,
            },
          ],
        };
      },
    );
  },
  name: "list_examples",
};
