import {
  createMarkdownProcessor,
  type MarkdownRenderer,
} from "@astrojs/markdown-remark";
import type { ComponentExampleDoc } from "./component-docs-types";
import { splitDevelopSegments } from "./parse-example-directives";

export type RenderedDevelopItem =
  | { type: "html"; html: string }
  | {
      type: "example";
      doc: ComponentExampleDoc;
      headed: boolean;
      descriptionHtml?: string;
    };

export type RenderedDevelopSegment =
  | { type: "html"; html: string }
  | {
      type: "example-section";
      id: string;
      title: string;
      items: RenderedDevelopItem[];
    };

let renderer: Promise<MarkdownRenderer> | undefined;

/** Markdown → HTML with Astro's default pipeline (shared across pages). */
async function renderMarkdown(markdown: string): Promise<string> {
  renderer ??= createMarkdownProcessor();
  const { code } = await (await renderer).render(markdown);
  return code;
}

/**
 * Render develop markdown in document order: plain sections as HTML, and
 * `:::example` sections as items the page shell turns into live previews.
 */
export async function renderDevelopSegments(
  body: string,
): Promise<RenderedDevelopSegment[]> {
  return Promise.all(
    splitDevelopSegments(body).map(
      async (segment): Promise<RenderedDevelopSegment> => {
        if (segment.type === "markdown") {
          return { html: await renderMarkdown(segment.markdown), type: "html" };
        }
        const items = await Promise.all(
          segment.items.map(async (item): Promise<RenderedDevelopItem> => {
            if (item.type === "markdown") {
              return {
                html: await renderMarkdown(item.markdown),
                type: "html",
              };
            }
            return item.descriptionMarkdown
              ? {
                  descriptionHtml: await renderMarkdown(
                    item.descriptionMarkdown,
                  ),
                  doc: item.doc,
                  headed: item.headed,
                  type: "example",
                }
              : { doc: item.doc, headed: item.headed, type: "example" };
          }),
        );
        return {
          id: segment.id,
          items,
          title: segment.title,
          type: "example-section",
        };
      },
    ),
  );
}
