import type { ComponentExampleDoc } from "./component-docs-types";

const EXAMPLE_DIRECTIVE_RE = /^:::example\s+(\S+)\s*$/;
const HEADING_RE = /^(#{1,6})\s+(.+?)\s*$/;
const FENCE_RE = /^\s*(```|~~~)/;

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

export type TocHeading = {
  depth: number;
  slug: string;
  text: string;
};

/** h2/h3 headings from skill markdown body — source of truth for docs TOC. */
export function extractTocHeadings(body: string): TocHeading[] {
  const headings: TocHeading[] = [];
  let inFence = false;
  for (const line of body.split(/\r?\n/)) {
    if (FENCE_RE.test(line)) inFence = !inFence;
    const heading = inFence ? null : HEADING_RE.exec(line);
    if (!heading?.[1] || !heading[2]) continue;
    const depth = heading[1].length;
    if (depth !== 2 && depth !== 3) continue;
    const text = heading[2].trim();
    if (!text) continue;
    const slug = slugifyHeading(text);
    if (!slug) continue;
    headings.push({ depth, slug, text });
  }
  return headings;
}

export type DevelopSectionItem =
  | { type: "markdown"; markdown: string }
  | {
      type: "example";
      doc: ComponentExampleDoc;
      /** False when several examples share one heading (only the first owns it). */
      headed: boolean;
      /** Raw markdown between the example heading and its directive. */
      descriptionMarkdown?: string;
    };

export type DevelopSegment =
  | { type: "markdown"; markdown: string }
  | {
      type: "example-section";
      id: string;
      title: string;
      items: DevelopSectionItem[];
    };

type RawSection = { lines: string[]; title: string };

/** Split body into preface + `##` sections, ignoring headings inside code fences. */
function splitH2Sections(body: string): {
  preface: string[];
  sections: RawSection[];
} {
  const preface: string[] = [];
  const sections: RawSection[] = [];
  let current: RawSection | undefined;
  let inFence = false;

  for (const line of body.split(/\r?\n/)) {
    if (FENCE_RE.test(line)) inFence = !inFence;
    const h2 = inFence ? null : /^##\s+(.+?)\s*$/.exec(line);
    if (h2?.[1]) {
      if (current) sections.push(current);
      current = { lines: [], title: h2[1].trim() };
      continue;
    }
    (current ? current.lines : preface).push(line);
  }
  if (current) sections.push(current);
  return { preface, sections };
}

function pushMarkdown(items: DevelopSectionItem[], lines: string[]): void {
  const markdown = lines.join("\n").trim();
  if (markdown) items.push({ markdown, type: "markdown" });
}

/**
 * Items of a `##` section that contains `:::example`, in document order.
 * Each `###` block with a directive becomes an example (heading + prose +
 * live preview); any other content stays markdown so nothing is dropped.
 */
function exampleSectionItems(
  lines: string[],
  examples: ComponentExampleDoc[],
): DevelopSectionItem[] {
  const items: DevelopSectionItem[] = [];
  let heading: string | undefined;
  let buffer: string[] = [];
  let consumedHeading = false;
  let inFence = false;
  let next = 0;

  const flush = () => {
    pushMarkdown(
      items,
      heading && !consumedHeading ? [heading, ...buffer] : buffer,
    );
    buffer = [];
  };

  for (const line of lines) {
    if (FENCE_RE.test(line)) inFence = !inFence;
    if (!inFence && /^#{3,6}\s+\S/.test(line)) {
      flush();
      heading = line;
      consumedHeading = false;
      continue;
    }

    const directive = inFence ? null : EXAMPLE_DIRECTIVE_RE.exec(line.trim());
    const doc = directive ? examples[next] : undefined;
    if (doc) {
      next++;
      if (heading && !consumedHeading) {
        const descriptionMarkdown = buffer.join("\n").trim();
        items.push({
          doc,
          headed: true,
          type: "example",
          ...(descriptionMarkdown ? { descriptionMarkdown } : {}),
        });
        consumedHeading = true;
      } else {
        // Directive without its own heading: keep prose, then the preview.
        pushMarkdown(items, buffer);
        items.push({ doc, headed: false, type: "example" });
      }
      buffer = [];
      continue;
    }
    buffer.push(line);
  }
  flush();
  return items;
}

/**
 * Split develop markdown into document-order segments: plain markdown `##`
 * sections vs sections that contain `:::example` (rendered by the page shell
 * in place, so TOC and page follow the markdown heading order 1:1).
 */
export function splitDevelopSegments(body: string): DevelopSegment[] {
  const segments: DevelopSegment[] = [];
  const { preface, sections } = splitH2Sections(body);
  const allExamples = parseExampleDirectives(body);

  const prefaceMd = preface.join("\n").trim();
  if (prefaceMd) segments.push({ markdown: prefaceMd, type: "markdown" });

  for (const section of sections) {
    const id = slugifyHeading(section.title);
    const sectionExamples = allExamples.filter(
      (example) => example.section?.id === id,
    );
    if (sectionExamples.length > 0) {
      segments.push({
        id,
        items: exampleSectionItems(section.lines, sectionExamples),
        title: section.title,
        type: "example-section",
      });
      continue;
    }

    const markdown = [`## ${section.title}`, ...section.lines]
      .join("\n")
      .trim();
    segments.push({ markdown, type: "markdown" });
  }

  return segments;
}

/**
 * Parse every single-line `:::example ExportName` in the skill body (anywhere).
 * No closing `:::` — the opening line alone is the directive.
 * Nearest preceding heading (depth ≥ 3) supplies title + depth; nearest `##`
 * supplies `section`. Prose between that heading and the directive is
 * `description`.
 */
export function parseExampleDirectives(body: string): ComponentExampleDoc[] {
  const lines = body.split(/\r?\n/);
  const examples: ComponentExampleDoc[] = [];

  let pendingTitle: string | undefined;
  let pendingDepth = 0;
  let pendingDescription: string[] = [];
  let currentSection: { id: string; title: string } | undefined;
  let inFence = false;

  for (const line of lines) {
    if (FENCE_RE.test(line)) inFence = !inFence;
    const heading = inFence ? null : HEADING_RE.exec(line);
    if (heading) {
      const depth = heading[1]?.length ?? 0;
      const text = heading[2]?.trim() ?? "";

      if (depth === 2 && text) {
        const id = slugifyHeading(text);
        currentSection = id ? { id, title: text } : undefined;
        pendingTitle = undefined;
        pendingDepth = 0;
        pendingDescription = [];
        continue;
      }

      if (depth >= 3 && text) {
        pendingTitle = text;
        pendingDepth = depth;
        pendingDescription = [];
        continue;
      }

      if (depth > 0 && depth < 2) {
        currentSection = undefined;
      }
      pendingTitle = undefined;
      pendingDepth = 0;
      pendingDescription = [];
      continue;
    }

    const directive = inFence ? null : EXAMPLE_DIRECTIVE_RE.exec(line.trim());
    if (directive?.[1]) {
      const exportName = directive[1];
      const title = pendingTitle?.trim() || exportName;
      const id = slugifyHeading(title) || slugifyHeading(exportName);
      const description = pendingDescription.join(" ").trim() || undefined;
      const depth = pendingDepth >= 3 ? pendingDepth : 3;
      examples.push({
        depth,
        exportName,
        id,
        title,
        ...(description ? { description } : {}),
        ...(currentSection ? { section: currentSection } : {}),
      });
      pendingTitle = undefined;
      pendingDepth = 0;
      pendingDescription = [];
      continue;
    }

    if (pendingTitle && line.trim()) {
      pendingDescription.push(line.trim());
    }
  }

  return examples;
}
