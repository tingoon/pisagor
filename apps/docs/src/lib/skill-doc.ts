import { parse as parseYaml } from "yaml";
import type { ComponentDocs } from "./component-docs-types";
import type { Framework } from "./nav";

/** Per-framework design + develop docs (`content/<fw>/{components,forms}/<id>/<pane>.md`). */
const docRawModules = import.meta.glob(
  "../content/{astro,react,solid,svelte,vue}/{components,forms}/*/{design,develop}.md",
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

function packageDirSlug(packageName: string): string {
  return packageName.replace(/^@pisagor\//, "");
}

function contentArea(opts?: { packageName?: string }): "components" | "forms" {
  return opts?.packageName?.endsWith("-form") ? "forms" : "components";
}

function frameworkFromOpts(opts?: {
  framework?: Framework;
  packageName?: string;
}): Framework | undefined {
  if (opts?.framework) return opts.framework;
  if (!opts?.packageName) return undefined;
  const slug = packageDirSlug(opts.packageName).replace(/-form$/, "");
  if (
    slug === "astro" ||
    slug === "react" ||
    slug === "solid" ||
    slug === "svelte" ||
    slug === "vue"
  ) {
    return slug;
  }
  return undefined;
}

function isPanePath(
  path: string,
  id: string,
  area: "components" | "forms",
  pane: "design" | "develop",
): boolean {
  return (
    /\/content\/(?:astro|react|solid|svelte|vue)\//.test(path) &&
    path.endsWith(`/${area}/${id}/${pane}.md`)
  );
}

function rankFrameworkCandidates(
  candidates: [string, string][],
  opts?: {
    framework?: Framework;
    packageName?: string;
  },
): [string, string] | undefined {
  if (candidates.length === 0) return undefined;

  const fw = frameworkFromOpts(opts);
  if (fw) {
    const hit = candidates.find(([path]) => path.includes(`/content/${fw}/`));
    if (hit) return hit;
  }

  const react = candidates.find(([path]) => path.includes("/content/react/"));
  return react ?? candidates[0];
}

/** Raw markdown for a design or develop pane (per-framework content). */
export function findSkillPaneRaw(
  id: string,
  pane: "design" | "develop",
  opts?: { framework?: Framework; packageName?: string },
): string | undefined {
  const area = contentArea(opts);
  const candidates = Object.entries(docRawModules).filter(([path]) =>
    isPanePath(path, id, area, pane),
  );
  return rankFrameworkCandidates(candidates, opts)?.[1];
}

/**
 * Markdown body for the pane currently shown on a component docs page.
 */
export function findDisplayedSkillBody(
  id: string,
  pane: "design" | "develop",
  opts?: { framework?: Framework; packageName?: string },
): string {
  const raw = findSkillPaneRaw(id, pane, opts);
  return raw ? skillDocBody(raw) : "";
}
