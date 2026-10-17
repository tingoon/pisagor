import { parse as parseYaml } from "yaml";
import type { ComponentDocs } from "./component-docs-types";

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
