import type { ComponentExampleDoc } from "./component-docs-types";

const EXAMPLE_DIRECTIVE_RE = /^:::example\s+(\S+)\s*$/;
const HEADING_RE = /^(#{1,6})\s+(.+?)\s*$/;

/** GitHub-style slug for TOC / heading ids. */
export function slugifyHeading(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s_-]/gu, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Parse every single-line `:::example ExportName` in the skill body (anywhere).
 * No closing `:::` — the opening line alone is the directive.
 * Optional nearest preceding heading (depth ≥ 3, not a bare "Examples" label)
 * supplies title; id is a slug of the title. Optional prose between that
 * heading and the directive becomes `description`.
 */
export function parseExampleDirectives(body: string): ComponentExampleDoc[] {
  const lines = body.split(/\r?\n/);
  const examples: ComponentExampleDoc[] = [];

  let pendingTitle: string | undefined;
  let pendingDescription: string[] = [];

  for (const line of lines) {
    const heading = HEADING_RE.exec(line);
    if (heading) {
      const depth = heading[1]?.length ?? 0;
      const text = heading[2]?.trim() ?? "";
      // Depth ≥ 3 only — ## Examples (etc.) is section chrome, not a title.
      if (depth >= 3 && text && !/^examples$/i.test(text)) {
        pendingTitle = text;
        pendingDescription = [];
      } else {
        pendingTitle = undefined;
        pendingDescription = [];
      }
      continue;
    }

    const directive = EXAMPLE_DIRECTIVE_RE.exec(line);
    if (directive?.[1]) {
      const exportName = directive[1];
      const title = pendingTitle?.trim() || exportName;
      const id = slugifyHeading(title) || slugifyHeading(exportName);
      const description = pendingDescription.join(" ").trim() || undefined;
      examples.push(
        description
          ? { description, exportName, id, title }
          : { exportName, id, title },
      );
      pendingTitle = undefined;
      pendingDescription = [];
      continue;
    }

    if (pendingTitle && line.trim()) {
      pendingDescription.push(line.trim());
    }
  }

  return examples;
}

/** Resolve examples exclusively from body `:::example` directives. */
export function resolveComponentExamples(body: string): ComponentExampleDoc[] {
  return parseExampleDirectives(body);
}
