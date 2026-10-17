import { parseSkillDoc } from "#/lib/skill-doc";

type ComponentApi = "closed" | "open" | "compound-shorthand" | "compound";
type ComponentTaxonomy =
  "primitive" | "standard" | "composite" | "layout" | "pattern";

interface ComponentMeta {
  /** Public API shape. */
  api: ComponentApi;
  /** Catalog grouping. */
  taxonomy: ComponentTaxonomy;
  /** Alternate names (search / migration). */
  aliases?: string[];
}

/**
 * Catalog metadata is framework-agnostic (api/taxonomy/aliases). Components use
 * `content/<fw>/components/<id>/meta.md`; forms use `…/forms/<id>.mdx`. React
 * is the superset, so it wins on id collisions.
 */
const metadataRawModules = {
  ...import.meta.glob(
    "../content/{react,solid,svelte,vue,astro}/components/*/meta.md",
    {
      eager: true,
      import: "default",
      query: "?raw",
    },
  ),
  ...import.meta.glob("../content/{react,solid,svelte,vue}/forms/*.mdx", {
    eager: true,
    import: "default",
    query: "?raw",
  }),
} as Record<string, string>;

const FRAMEWORK_PRIORITY = ["react", "solid", "svelte", "vue", "astro"];

function idFromMetaPath(path: string): string | undefined {
  return (
    /\/content\/[^/]+\/components\/([^/]+)\/meta\.md$/.exec(path)?.[1] ??
    /\/content\/[^/]+\/forms\/([^/]+)\.mdx$/.exec(path)?.[1]
  );
}

function metaRank(path: string): number {
  const framework = /\/content\/([^/]+)\//.exec(path)?.[1] ?? "";
  const fwRank = FRAMEWORK_PRIORITY.indexOf(framework);
  const formRank = path.includes("/forms/") ? 1 : 0;
  return formRank * FRAMEWORK_PRIORITY.length + (fwRank < 0 ? 99 : fwRank);
}

function metaFromContentDocs(): Record<string, ComponentMeta> {
  const out: Record<string, ComponentMeta> = {};
  const ranked = Object.entries(metadataRawModules).sort(
    ([a], [b]) => metaRank(a) - metaRank(b),
  );
  for (const [path, raw] of ranked) {
    if (typeof raw !== "string" || !raw.startsWith("---")) continue;
    const id = idFromMetaPath(path);
    if (!id || out[id]) continue;
    try {
      const { docs } = parseSkillDoc(raw);
      out[id] = {
        aliases: docs.aliases ? [...docs.aliases] : undefined,
        api: docs.api as ComponentApi,
        taxonomy: docs.taxonomy as ComponentTaxonomy,
      };
    } catch {
      // Stub without valid frontmatter — skip
    }
  }
  return out;
}

const contentMeta = metaFromContentDocs();

const fallbackMeta: Record<string, ComponentMeta> = {
  "avatar-group": {
    api: "compound-shorthand",
    taxonomy: "standard",
  },
  bar: {
    aliases: ["graph"],
    api: "compound",
    taxonomy: "pattern",
  },
  "scroll-spy": {
    aliases: ["scroll-spy"],
    api: "closed",
    taxonomy: "pattern",
  },
};

/**
 * Framework-agnostic component catalog metadata (formerly Storybook
 * parameters.metadata).
 */
export const componentMeta: Record<string, ComponentMeta> = {
  ...fallbackMeta,
  ...contentMeta,
};
