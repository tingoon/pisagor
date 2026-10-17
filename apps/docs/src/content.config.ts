import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const componentDocsSchema = z.object({
  aliases: z.array(z.string()).optional(),
  api: z.enum([
    "closed",
    "open",
    "compound",
    "compound-shorthand",
    "shorthand",
    "primitive",
  ]),
  description: z.string(),
  packageName: z.string().optional(),
  taxonomy: z.enum([
    "standard",
    "pattern",
    "layout",
    "utility",
    "primitive",
    "composite",
  ]),
  title: z.string(),
});

const blockDocsSchema = z.object({
  description: z.string(),
  title: z.string(),
});

function metaCollection(
  framework: string,
  area: "components" | "forms" | "blocks",
) {
  return defineCollection({
    loader: glob({
      // Relative to the docs project root (not import.meta.url — that breaks when
      // the config is bundled and leaves collections empty).
      base: `./src/content/${framework}/${area}`,
      generateId: ({ entry }) => entry.replace(/\\/g, "/").replace(/\.md$/, ""),
      // Only top-level meta files (`accordion.md`), not nested panes.
      pattern: "*.md",
    }),
    schema: area === "blocks" ? blockDocsSchema : componentDocsSchema,
  });
}

export const collections = {
  astroComponents: metaCollection("astro", "components"),
  reactBlocks: metaCollection("react", "blocks"),
  reactComponents: metaCollection("react", "components"),
  reactForms: metaCollection("react", "forms"),
  solidBlocks: metaCollection("solid", "blocks"),
  solidComponents: metaCollection("solid", "components"),
  solidForms: metaCollection("solid", "forms"),
  svelteBlocks: metaCollection("svelte", "blocks"),
  svelteComponents: metaCollection("svelte", "components"),
  svelteForms: metaCollection("svelte", "forms"),
  vueBlocks: metaCollection("vue", "blocks"),
  vueComponents: metaCollection("vue", "components"),
  vueForms: metaCollection("vue", "forms"),
};
