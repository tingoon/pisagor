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

function pageCollection(framework: string, area: "forms" | "blocks") {
  return defineCollection({
    loader: glob({
      // Relative to the docs project root (not import.meta.url — that breaks when
      // the config is bundled and leaves collections empty).
      base: `./src/content/${framework}/${area}`,
      generateId: ({ entry }) =>
        entry.replace(/\\/g, "/").replace(/\.mdx$/, ""),
      pattern: "*.mdx",
    }),
    schema: area === "blocks" ? blockDocsSchema : componentDocsSchema,
  });
}

/** Shared component meta. `api` is the same on every framework. */
const components = defineCollection({
  loader: glob({
    base: "./src/content/components",
    generateId: ({ entry }) =>
      entry
        .replace(/\\/g, "/")
        .replace(/\/meta\.md$/, "")
        .replace(/\.md$/, ""),
    pattern: "**/meta.md",
  }),
  schema: componentDocsSchema,
});

export const collections = {
  components,
  reactBlocks: pageCollection("react", "blocks"),
  reactForms: pageCollection("react", "forms"),
  solidBlocks: pageCollection("solid", "blocks"),
  solidForms: pageCollection("solid", "forms"),
  svelteBlocks: pageCollection("svelte", "blocks"),
  svelteForms: pageCollection("svelte", "forms"),
  vueBlocks: pageCollection("vue", "blocks"),
  vueForms: pageCollection("vue", "forms"),
};
