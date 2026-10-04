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

/** Shared content + per-package develop docs. */
const docRawModules = import.meta.glob(
  [
    "../content/components/*/metadata.md",
    "../content/components/*/design.md",
    "../content/forms/*/metadata.md",
    "../content/forms/*/design.md",
    "../../../../packages/*/docs/*.md",
  ],
  {
    eager: true,
    import: "default",
    query: "?raw",
  },
) as Record<string, string>;

/** Split `---` YAML frontmatter from a markdown file. */
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

function contentArea(opts?: { packageName?: string }): "components" | "forms" {
  return opts?.packageName?.endsWith("-form") ? "forms" : "components";
}

function isMetadataPath(
  path: string,
  id: string,
  area: "components" | "forms",
): boolean {
  return path.endsWith(`/content/${area}/${id}/metadata.md`);
}

function isDesignPath(
  path: string,
  id: string,
  area: "components" | "forms",
): boolean {
  return path.endsWith(`/content/${area}/${id}/design.md`);
}

function isDevelopPath(path: string, id: string): boolean {
  return path.endsWith(`/docs/${id}.md`);
}

function rankDevelopCandidates(
  candidates: [string, string][],
  opts?: {
    framework?: Framework;
    packageName?: string;
  },
): [string, string] | undefined {
  if (candidates.length === 0) return undefined;

  if (opts?.packageName) {
    const slug = packageDirSlug(opts.packageName);
    const hit = candidates.find(([path]) =>
      path.includes(`/packages/${slug}/`),
    );
    if (hit) return hit;
  }

  if (opts?.framework) {
    const fw = opts.framework;
    const hit = candidates.find(([path]) => path.includes(`/packages/${fw}/`));
    if (hit) return hit;
  }

  const react = candidates.find(([path]) => path.includes("/packages/react/"));
  return react ?? candidates[0];
}

/**
 * Find shared metadata markdown for a component id.
 */
export function findSkillRaw(
  id: string,
  opts?: { framework?: Framework; packageName?: string },
): string | undefined {
  const area = contentArea(opts);
  const hit = Object.entries(docRawModules).find(([path]) =>
    isMetadataPath(path, id, area),
  );
  return hit?.[1];
}

/** Raw markdown for design (shared) or develop (package docs). */
export function findSkillPaneRaw(
  id: string,
  pane: "design" | "usage" | "examples" | "develop",
  opts?: { framework?: Framework; packageName?: string },
): string | undefined {
  if (pane === "design") {
    const area = contentArea(opts);
    const hit = Object.entries(docRawModules).find(([path]) =>
      isDesignPath(path, id, area),
    );
    return hit?.[1];
  }

  if (pane === "develop") {
    const candidates = Object.entries(docRawModules).filter(([path]) =>
      isDevelopPath(path, id),
    );
    return rankDevelopCandidates(candidates, opts)?.[1];
  }

  // Legacy panes removed — callers fall back to develop / metadata.
  return undefined;
}

/**
 * Body used to resolve `:::example` directives — package `docs/<id>.md`.
 */
export function findSkillExamplesBody(
  id: string,
  opts?: { framework?: Framework; packageName?: string },
): string {
  const develop = findSkillPaneRaw(id, "develop", opts);
  if (develop) return skillDocBody(develop);
  const raw = findSkillRaw(id, opts);
  return raw ? parseSkillDoc(raw).body : "";
}

/**
 * Markdown body for the pane currently shown on a component docs page.
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
  const raw = findSkillRaw(id, opts);
  return raw ? parseSkillDoc(raw).body : "";
}

/**
 * Read the import shown in a primitive's `## Import` section.
 * Prefers package develop docs; falls back to a generated statement.
 */
export function getSkillDocImportStatement(
  id: string,
  packageName = DEFAULT_PACKAGE_NAME.react,
  framework?: Framework,
): string {
  const opts = { framework, packageName };
  const developRaw = findSkillPaneRaw(id, "develop", opts);
  const searchBodies = [
    developRaw ? skillDocBody(developRaw) : undefined,
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
