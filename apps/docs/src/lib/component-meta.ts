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
  [
    "../../../../packages/*/skills/*/references/primitives/*.md",
    "../../../../packages/*/skills/*/references/primitives/*/metadata.md",
  ],
  {
    eager: true,
    import: "default",
    query: "?raw",
  },
) as Record<string, string>;

function packagePriority(path: string): number {
  if (path.includes("/packages/react/")) return 0;
  if (path.includes("/packages/vue/")) return 1;
  if (path.includes("/packages/astro/")) return 2;
  if (path.includes("/packages/solid/")) return 3;
  if (path.includes("/packages/svelte/")) return 4;
  return 10;
}

function idFromMetaPath(path: string): string | undefined {
  const folder = /\/primitives\/([^/]+)\/metadata\.md$/.exec(path);
  if (folder?.[1]) return folder[1];
  const flat = /\/primitives\/([^/]+)\.md$/.exec(path);
  return flat?.[1];
}

function metaFromSkillDocs(): Record<string, ComponentMeta> {
  const out: Record<string, ComponentMeta> = {};
  const ranked = Object.entries(skillRawModules).sort(
    ([a], [b]) => packagePriority(a) - packagePriority(b),
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
