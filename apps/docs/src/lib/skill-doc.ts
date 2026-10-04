import { parse as parseYaml } from "yaml";
import type { ComponentDocs } from "./component-docs-types";
import type { Framework } from "./nav";

/** Shared design + per-framework develop docs. */
const docRawModules = import.meta.glob(
  [
    "../content/components/*/design.md",
    "../content/forms/*/design.md",
    "../content/{astro,react,solid,svelte,vue}/{components,forms}/*.md",
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

function packageDirSlug(packageName: string): string {
  return packageName.replace(/^@pisagor\//, "");
}

function contentArea(opts?: { packageName?: string }): "components" | "forms" {
  return opts?.packageName?.endsWith("-form") ? "forms" : "components";
}

function isDesignPath(
  path: string,
  id: string,
  area: "components" | "forms",
): boolean {
  return path.endsWith(`/content/${area}/${id}/design.md`);
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

function isDevelopPath(
  path: string,
  id: string,
  area: "components" | "forms",
): boolean {
  return (
    /\/content\/(?:astro|react|solid|svelte|vue)\/(?:components|forms)\/[^/]+\.md$/.test(
      path,
    ) && path.endsWith(`/${area}/${id}.md`)
  );
}

function rankDevelopCandidates(
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

/** Raw markdown for design (shared) or develop (per-framework content). */
export function findSkillPaneRaw(
  id: string,
  pane: "design" | "develop",
  opts?: { framework?: Framework; packageName?: string },
): string | undefined {
  if (pane === "design") {
    const area = contentArea(opts);
    const hit = Object.entries(docRawModules).find(([path]) =>
      isDesignPath(path, id, area),
    );
    return hit?.[1];
  }

  const area = contentArea(opts);
  const candidates = Object.entries(docRawModules).filter(([path]) =>
    isDevelopPath(path, id, area),
  );
  return rankDevelopCandidates(candidates, opts)?.[1];
}

/**
 * Body used to resolve `:::example` directives — develop markdown.
 */
export function findSkillExamplesBody(
  id: string,
  opts?: { framework?: Framework; packageName?: string },
): string {
  const develop = findSkillPaneRaw(id, "develop", opts);
  return develop ? skillDocBody(develop) : "";
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
