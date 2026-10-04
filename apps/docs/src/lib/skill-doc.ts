import { parse as parseYaml } from "yaml";
import type { ComponentDocs } from "./component-docs-types";
import type { Framework } from "./nav";

const DEFAULT_PACKAGE_NAME: Record<Framework, string> = {
  astro: "@pisagor/astro",
  react: "@pisagor/react",
  solid: "@pisagor/solid",
  svelte: "@pisagor/svelte",
  vue: "@pisagor/vue",
};

/** Flat primitive markdown + React folder `metadata.md` / panes. */
const skillRawModules = import.meta.glob(
  [
    "../../../../packages/*/skills/*/references/primitives/*.md",
    "../../../../packages/*/skills/*/references/primitives/*/metadata.md",
    "../../../../packages/*/skills/*/references/primitives/*/{design,develop,usage,examples}.md",
  ],
  {
    eager: true,
    import: "default",
    query: "?raw",
  },
) as Record<string, string>;

/** Split `---` YAML frontmatter from a skill markdown file. */
export function parseSkillDoc(raw: string): {
  body: string;
  docs: ComponentDocs;
} {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(raw);
  if (!match?.[1]) {
    throw new Error("Skill markdown is missing YAML frontmatter");
  }
  const docs = parseYaml(match[1]) as ComponentDocs;
  return { body: (match[2] ?? "").trim(), docs };
}

/** Body text for pane files that may omit YAML frontmatter. */
export function skillDocBody(raw: string): string {
  if (raw.startsWith("---")) {
    try {
      return parseSkillDoc(raw).body;
    } catch {
      return raw.trim();
    }
  }
  return raw.trim();
}

function pascalCase(id: string): string {
  return id
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

/**
 * Heavy UI modules live under `src/<id>/` and are omitted from the package
 * root barrel — import via `@pisagor/<fw>/<id>` only.
 * Forms are separate packages (always barrel / `./tanstack`).
 */
const HEAVY_UI_COMPONENT_IDS = new Set([
  "data-grid",
  "data-table",
  "phone-input",
  "rich-text-editor",
]);

function packageDirSlug(packageName: string): string {
  return packageName.replace(/^@pisagor\//, "");
}

function isMetadataPath(path: string, id: string): boolean {
  return path.endsWith(`/primitives/${id}/metadata.md`);
}

function isFlatPath(path: string, id: string): boolean {
  return path.endsWith(`/primitives/${id}.md`);
}

function isPanePath(path: string, id: string, pane: string): boolean {
  return path.endsWith(`/primitives/${id}/${pane}.md`);
}

function rankCandidates(
  candidates: [string, string][],
  opts?: {
    framework?: Framework;
    packageName?: string;
    /** When true, do not fall back across packages (used for split panes). */
    strictPackage?: boolean;
  },
): [string, string] | undefined {
  if (candidates.length === 0) return undefined;

  if (opts?.packageName) {
    const slug = packageDirSlug(opts.packageName);
    const hit = candidates.find(([path]) =>
      path.includes(`/packages/${slug}/`),
    );
    if (hit) return hit;
    if (opts.strictPackage) return undefined;
  }

  if (opts?.framework) {
    const fw = opts.framework;
    const hit = candidates.find(([path]) => path.includes(`/packages/${fw}/`));
    if (hit) return hit;
    if (opts.strictPackage) return undefined;
  }

  const react = candidates.find(([path]) => path.includes("/packages/react/"));
  return react ?? candidates[0];
}

/**
 * Find raw skill markdown for a component id, optionally scoped by package.
 * Prefer folder `metadata.md`, then flat `<id>.md`.
 */
export function findSkillRaw(
  id: string,
  opts?: { framework?: Framework; packageName?: string },
): string | undefined {
  const metadataCandidates = Object.entries(skillRawModules).filter(([path]) =>
    isMetadataPath(path, id),
  );
  const metadataHit = rankCandidates(metadataCandidates, opts);
  if (metadataHit) return metadataHit[1];

  const flatCandidates = Object.entries(skillRawModules).filter(([path]) =>
    isFlatPath(path, id),
  );
  return rankCandidates(flatCandidates, opts)?.[1];
}

/** Raw markdown for a split pane (`design` / `usage` / `examples` / `develop`). */
export function findSkillPaneRaw(
  id: string,
  pane: "design" | "usage" | "examples" | "develop",
  opts?: { framework?: Framework; packageName?: string },
): string | undefined {
  const candidates = Object.entries(skillRawModules).filter(([path]) =>
    isPanePath(path, id, pane),
  );
  return rankCandidates(candidates, { ...opts, strictPackage: true })?.[1];
}

/**
 * Body used to resolve `:::example` directives — `develop.md` when split,
 * legacy `examples.md`, otherwise the flat / index skill body.
 */
export function findSkillExamplesBody(
  id: string,
  opts?: { framework?: Framework; packageName?: string },
): string {
  const develop = findSkillPaneRaw(id, "develop", opts);
  if (develop) return skillDocBody(develop);
  const legacy = findSkillPaneRaw(id, "examples", opts);
  if (legacy) return skillDocBody(legacy);
  const raw = findSkillRaw(id, opts);
  return raw ? parseSkillDoc(raw).body : "";
}

/**
 * Markdown body for the pane currently shown on a component docs page.
 * Develop falls back through legacy `usage.md`, then the flat skill body.
 */
export function findDisplayedSkillBody(
  id: string,
  pane: "design" | "develop",
  opts?: { framework?: Framework; packageName?: string },
): string {
  if (pane === "design") {
    const design = findSkillPaneRaw(id, "design", opts);
    return design ? skillDocBody(design) : "";
  }

  const develop = findSkillPaneRaw(id, "develop", opts);
  if (develop) return skillDocBody(develop);
  const usage = findSkillPaneRaw(id, "usage", opts);
  if (usage) return skillDocBody(usage);
  const raw = findSkillRaw(id, opts);
  return raw ? parseSkillDoc(raw).body : "";
}

/**
 * Read the import shown in a primitive's `## Import` section.
 * Prefers `develop.md` (then legacy `usage.md`); falls back to the main skill body.
 */
export function getSkillDocImportStatement(
  id: string,
  packageName = DEFAULT_PACKAGE_NAME.react,
  framework?: Framework,
): string {
  const opts = { framework, packageName };
  const developRaw = findSkillPaneRaw(id, "develop", opts);
  const usageRaw = findSkillPaneRaw(id, "usage", opts);
  const searchBodies = [
    developRaw ? skillDocBody(developRaw) : undefined,
    usageRaw ? skillDocBody(usageRaw) : undefined,
    (() => {
      const raw = findSkillRaw(id, opts);
      return raw ? parseSkillDoc(raw).body : undefined;
    })(),
  ].filter((b): b is string => Boolean(b));

  for (const body of searchBodies) {
    const importHeading = body.indexOf("## Import");
    if (importHeading < 0) continue;
    const nextHeading = body.indexOf("\n## ", importHeading + 1);
    const section = body.slice(
      importHeading,
      nextHeading >= 0 ? nextHeading : body.length,
    );
    const code =
      /```(?:tsx?|typescript|astro|vue|svelte)?\s*\r?\n([\s\S]*?)```/.exec(
        section,
      )?.[1];
    const statement = code
      ?.split(/\r?\n/)
      .map((line) => line.trim())
      .find((line) => line.startsWith("import "));
    if (statement) return statement;
  }

  const isFormPackage = packageName.endsWith("-form");
  const useSubpath = !isFormPackage && HEAVY_UI_COMPONENT_IDS.has(id);
  const specifier = useSubpath ? `${packageName}/${id}` : packageName;
  return `import { ${pascalCase(id)} } from "${specifier}";`;
}
