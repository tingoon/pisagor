import { parseSkillDoc } from "#/lib/skill-doc";

type ComponentApi = "closed" | "open" | "compound-shorthand" | "compound";
type ComponentTaxonomy =
  | "primitive"
  | "standard"
  | "composite"
  | "layout"
  | "pattern";

interface ComponentMeta {
  /** Public API shape. */
  api: ComponentApi;
  /** Catalog grouping. */
  taxonomy: ComponentTaxonomy;
  /** Alternate names (search / migration). */
  aliases?: string[];
}

const metadataRawModules = import.meta.glob(
  ["../content/components/*/metadata.md", "../content/forms/*/metadata.md"],
  {
    eager: true,
    import: "default",
    query: "?raw",
  },
) as Record<string, string>;

function idFromMetaPath(path: string): string | undefined {
  return /\/content\/(?:components|forms)\/([^/]+)\/metadata\.md$/.exec(
    path,
  )?.[1];
}

function metaFromContentDocs(): Record<string, ComponentMeta> {
  const out: Record<string, ComponentMeta> = {};
  // Prefer components over forms when ids collide (they shouldn't).
  const ranked = Object.entries(metadataRawModules).sort(([a], [b]) => {
    const aForm = a.includes("/content/forms/") ? 1 : 0;
    const bForm = b.includes("/content/forms/") ? 1 : 0;
    return aForm - bForm;
  });
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

/**
 * Framework-agnostic component catalog metadata.
 * Migrated primitives load api/taxonomy/aliases from shared content frontmatter.
 * Entries below fill gaps (no docs page / alternate ids).
 */
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

/** Framework-agnostic component catalog metadata (formerly Storybook parameters.metadata). */
export const componentMeta: Record<string, ComponentMeta> = {
  ...fallbackMeta,
  ...contentMeta,
};
