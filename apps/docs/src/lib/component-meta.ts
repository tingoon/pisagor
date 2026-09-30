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

const skillRawModules = import.meta.glob(
  "../../../../packages/react/skills/react/references/primitives/*.md",
  {
    eager: true,
    import: "default",
    query: "?raw",
  },
) as Record<string, string>;

function metaFromSkillDocs(): Record<string, ComponentMeta> {
  const out: Record<string, ComponentMeta> = {};
  for (const [path, raw] of Object.entries(skillRawModules)) {
    if (typeof raw !== "string" || !raw.startsWith("---")) continue;
    const id = path.split("/").pop()?.replace(/\.md$/, "");
    if (!id) continue;
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
 * Migrated primitives load api/taxonomy/aliases from skill markdown frontmatter.
 * Entries below fill gaps (no docs page / alternate ids).
 */
const skillMeta = metaFromSkillDocs();

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
  ...skillMeta,
};
