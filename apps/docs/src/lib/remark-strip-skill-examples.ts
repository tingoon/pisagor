/**
 * Strip skill-doc `:::example ExportName` lines from Astro `<Content />`.
 * Live previews are rendered by `component-doc-page` from parsed directives
 * in the raw skill markdown (directives may appear anywhere in the body).
 *
 * When an optional `## Examples` section is present, drop that whole section
 * so its headings are not duplicated next to the page-shell previews.
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

const EXAMPLE_DIRECTIVE_RE = /^:::example\s+\S+\s*$/;

function textContent(node: MdastNode): string {
  if (typeof node.value === "string") return node.value;
  return (node.children ?? []).map(textContent).join("");
}

function isExampleDirectiveParagraph(node: MdastNode): boolean {
  if (node.type !== "paragraph") return false;
  return EXAMPLE_DIRECTIVE_RE.test(textContent(node).trim());
}

/** Remark plugin factory for Astro `markdown.remarkPlugins`. */
export function stripSkillExamplesPlugin() {
  return (tree: MdastRoot) => {
    const children = tree.children;

    let start = -1;
    let end = children.length;

    for (let i = 0; i < children.length; i++) {
      const node = children[i];
      if (
        node?.type === "heading" &&
        node.depth === 2 &&
        textContent(node).trim().toLowerCase() === "examples"
      ) {
        start = i;
        continue;
      }
      if (start >= 0 && node?.type === "heading" && node.depth === 2) {
        end = i;
        break;
      }
    }

    if (start >= 0) {
      children.splice(start, end - start);
    }

    // Directives outside `## Examples` (or leftover after section strip).
    for (let i = children.length - 1; i >= 0; i--) {
      const node = children[i];
      if (node && isExampleDirectiveParagraph(node)) {
        children.splice(i, 1);
      }
    }
  };
}
