import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

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

function metaCollection(framework: string, area: "components" | "forms") {
  return defineCollection({
    loader: glob({
      base: `./src/content/${framework}/${area}`,
      generateId: ({ entry }) => entry.replace(/\.md$/, ""),
      pattern: "*.md",
    }),
    schema: componentDocsSchema,
  });
}

export const collections = {
  astroComponents: metaCollection("astro", "components"),
  reactComponents: metaCollection("react", "components"),
  reactForms: metaCollection("react", "forms"),
  solidComponents: metaCollection("solid", "components"),
  solidForms: metaCollection("solid", "forms"),
  svelteComponents: metaCollection("svelte", "components"),
  svelteForms: metaCollection("svelte", "forms"),
  vueComponents: metaCollection("vue", "components"),
  vueForms: metaCollection("vue", "forms"),
};
