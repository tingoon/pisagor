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

/** All skill primitive markdown (react/vue/astro/solid/svelte + form/charts packages). */
const skillRawModules = import.meta.glob(
  "../../../../packages/*/skills/*/references/primitives/*.md",
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

function pascalCase(id: string): string {
  return id
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function packageDirSlug(packageName: string): string {
  return packageName.replace(/^@pisagor\//, "");
}

/**
 * Find raw skill markdown for a component id, optionally scoped by package.
 * Prefer an exact package path match; otherwise prefer the given framework's
 * package, then react, then any match.
 */
export function findSkillRaw(
  id: string,
  opts?: { framework?: Framework; packageName?: string },
): string | undefined {
  const candidates = Object.entries(skillRawModules).filter(([path]) =>
    path.endsWith(`/${id}.md`),
  );
  if (candidates.length === 0) return undefined;

  if (opts?.packageName) {
    const slug = packageDirSlug(opts.packageName);
    const hit = candidates.find(([path]) =>
      path.includes(`/packages/${slug}/`),
    );
    if (hit) return hit[1];
  }

  if (opts?.framework) {
    const fw = opts.framework;
    const hit = candidates.find(([path]) => path.includes(`/packages/${fw}/`));
    if (hit) return hit[1];
  }

  const react = candidates.find(([path]) => path.includes("/packages/react/"));
  return (react ?? candidates[0])?.[1];
}

/**
 * Read the import shown in a primitive's `## Import` section.
 * The fallback keeps docs usable if a markdown file has no import example.
 */
export function getSkillDocImportStatement(
  id: string,
  packageName = DEFAULT_PACKAGE_NAME.react,
  framework?: Framework,
): string {
  const raw = findSkillRaw(id, { framework, packageName });
  if (raw) {
    const importHeading = raw.indexOf("## Import");
    if (importHeading >= 0) {
      const nextHeading = raw.indexOf("\n## ", importHeading + 1);
      const section = raw.slice(
        importHeading,
        nextHeading >= 0 ? nextHeading : raw.length,
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
  }
  return `import { ${pascalCase(id)} } from "${packageName}/${id}";`;
}
