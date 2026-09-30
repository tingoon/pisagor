import { parse as parseYaml } from "yaml";
import type { ComponentDocs } from "./component-docs-types";

const DEFAULT_PACKAGE_NAME = "@pisagor/react";

const skillRawModules = import.meta.glob(
  "../../../../packages/react/skills/react/references/primitives/*.md",
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

/**
 * Read the import shown in a primitive's `## Import` section.
 * The fallback keeps docs usable if a markdown file has no import example.
 */
export function getSkillDocImportStatement(
  id: string,
  packageName = DEFAULT_PACKAGE_NAME,
): string {
  const raw = Object.entries(skillRawModules).find(([path]) =>
    path.endsWith(`/${id}.md`),
  )?.[1];
  if (raw) {
    const importHeading = raw.indexOf("## Import");
    if (importHeading >= 0) {
      const nextHeading = raw.indexOf("\n## ", importHeading + 1);
      const section = raw.slice(
        importHeading,
        nextHeading >= 0 ? nextHeading : raw.length,
      );
      const code = /```(?:tsx?|typescript)?\s*\r?\n([\s\S]*?)```/.exec(
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
