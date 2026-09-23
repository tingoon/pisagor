import { z } from "zod";
import { getRecipe } from "../lib/catalog";
import { INSTALL_GUIDE } from "../lib/resolve";
import type { Tool } from "../lib/types";

export const getRecipeTool: Tool = {
  description:
    "Get the shared Tailwind recipe (tv) for a Pisagor component from installed @pisagor/recipes.",
  exec(server, { name, description, config }) {
    server.registerTool(
      name,
      {
        description,
        inputSchema: {
          component: z
            .string()
            .describe("Component name (kebab-case), matching packages/recipes/src/<name>.ts."),
        },
      },
      async ({ component }) => {
        if (config.packages.length === 0) {
          return {
            content: [{ text: INSTALL_GUIDE, type: "text" as const }],
          };
        }

        const recipe = getRecipe(config, component);

        return {
          content: [
            {
              text: JSON.stringify(recipe, null, 2),
              type: "text" as const,
            },
          ],
        };
      },
    );
  },
  name: "get_recipe",
};
