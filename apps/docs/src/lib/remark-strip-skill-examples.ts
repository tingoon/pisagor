/**
 * Strip skill-doc example sections from Astro `<Content />`.
 * Live previews are rendered by `component-doc-page` from parsed directives
 * in the raw skill markdown (directives may appear anywhere in the body).
 *
 * Drops every `##` section that contains at least one `:::example` line so
 * headings are not duplicated next to the page-shell previews. Sections
 * without examples (Import, Usage, …) stay in Content.
 *
 * Section detection uses the raw markdown source (not mdast node shapes), so
 * it stays correct whether `:::example` is a paragraph, directive, or other
 * node type after parse.
 *
 * Plain remark plugin — no container-directive / Sätteri dependency.
 * Opening line only: `:::example ExportName` (no closing `:::`).
 */

type MdastNode = {
  type: string;
  depth?: number;
  value?: string;
  children?: MdastNode[];
};

type MdastRoot = {
  type: string;
  children: MdastNode[];
};

type RemarkFile = {
  value?: string | Uint8Array;
};

const EXAMPLE_DIRECTIVE_RE = /^:::example\s+\S+\s*$/;
const H2_RE = /^##\s+(.+?)\s*$/;

function textContent(node: MdastNode): string {
  if (typeof node.value === "string") return node.value;
  return (node.children ?? []).map(textContent).join("");
}

function isH2(node: MdastNode | undefined): boolean {
  return node?.type === "heading" && node.depth === 2;
}

function fileText(file: RemarkFile | undefined): string {
  const value = file?.value;
  if (typeof value === "string") return value;
  if (value instanceof Uint8Array) {
    return new TextDecoder().decode(value);
  }
  return "";
}

/** `##` titles whose section body includes a `:::example` line. */
function exampleSectionTitles(raw: string): Set<string> {
  const titles = new Set<string>();
  let current: string | undefined;
  let hasExample = false;

  for (const line of raw.split(/\r?\n/)) {
    const heading = H2_RE.exec(line);
    if (heading?.[1]) {
      if (current && hasExample) titles.add(current);
      current = heading[1].trim();
      hasExample = false;
      continue;
    }
    if (current && EXAMPLE_DIRECTIVE_RE.test(line.trim())) {
      hasExample = true;
    }
  }

  if (current && hasExample) titles.add(current);
  return titles;
}

function isExampleDirectiveNode(node: MdastNode): boolean {
  const text = textContent(node).trim();
  if (EXAMPLE_DIRECTIVE_RE.test(text)) return true;
  if (/:::example\s+\S+/.test(text)) return true;
  const name = (node as { name?: string }).name;
  return typeof name === "string" && name.toLowerCase() === "example";
}

/** Remark plugin factory for Astro `markdown.remarkPlugins`. */
export function stripSkillExamplesPlugin() {
  return (tree: MdastRoot, file?: RemarkFile) => {
    const children = tree.children;
    const stripTitles = exampleSectionTitles(fileText(file));
    const removeRanges: { start: number; end: number }[] = [];

    let sectionStart = -1;
    let sectionTitle: string | undefined;

    for (let i = 0; i <= children.length; i++) {
      const node = children[i];
      const atEnd = i === children.length;
      if (!atEnd && !isH2(node)) continue;

      if (sectionStart >= 0) {
        const sectionEnd = i;
        const title = sectionTitle ?? "";
        const stripByTitle = title.length > 0 && stripTitles.has(title);
        const stripByNodes = children
          .slice(sectionStart, sectionEnd)
          .some((child) => child != null && isExampleDirectiveNode(child));
        if (stripByTitle || stripByNodes) {
          removeRanges.push({ end: sectionEnd, start: sectionStart });
        }
      }

      if (!atEnd && node) {
        sectionStart = i;
        sectionTitle = textContent(node).trim();
      }
    }

    for (let r = removeRanges.length - 1; r >= 0; r--) {
      const range = removeRanges[r];
      if (!range) continue;
      children.splice(range.start, range.end - range.start);
    }

    for (let i = children.length - 1; i >= 0; i--) {
      const node = children[i];
      if (node && isExampleDirectiveNode(node)) {
        children.splice(i, 1);
      }
    }
  };
}
