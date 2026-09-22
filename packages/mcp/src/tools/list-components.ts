import { listComponents } from "../lib/catalog";
import { INSTALL_GUIDE } from "../lib/resolve";
import { type Framework, frameworkInputSchema, resolveFramework, type Tool } from "../lib/types";

export const listComponentsTool: Tool = {
  description:
    "List Pisagor components from installed @pisagor/* packages. If none are installed, returns setup instructions.",
  exec(server, { name, description, config }) {
    const multi = config.frameworks.length > 1;

    server.registerTool(
      name,
      {
        description,
        inputSchema: multi ? { framework: frameworkInputSchema(config.frameworks) } : {},
      },
      async (args: { framework?: Framework }) => {
        if (config.packages.length === 0) {
          return {
            content: [{ text: INSTALL_GUIDE, type: "text" as const }],
          };
        }

        if (config.frameworks.length === 0) {
          return {
            content: [
              {
                text: JSON.stringify(
                  {
                    components: [],
                    hint: "No UI framework packages installed. Add @pisagor/react, @pisagor/vue, or @pisagor/astro.",
                    packages: config.packages.map((pkg) => pkg.name),
                  },
                  null,
                  2,
                ),
                type: "text" as const,
              },
            ],
          };
        }

        const framework = resolveFramework(config, args.framework);
        const components = listComponents(config, framework);

        return {
          content: [
            {
              text: JSON.stringify(
                {
                  components,
                  framework,
                  packages: config.packages.map((pkg) => pkg.name),
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
  name: "list_components",
};
