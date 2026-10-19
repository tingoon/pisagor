import { SegmentGroup } from "@pisagor/react";
import { useRef, useState } from "react";
import { ensureLazyCodeBlock } from "#/lib/ensure-lazy-codeblock";

type PreviewView = "preview" | "code";

/** Preview / Code switch for `component-preview.astro` (React SegmentGroup). */
export function PreviewViewTabs({ title }: { title?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<PreviewView>("preview");

  function applyView(next: PreviewView) {
    const root = rootRef.current?.closest<HTMLElement>(
      "[data-component-preview]",
    );
    if (!root) return;
    const previewPanel = root.querySelector<HTMLElement>(
      '[data-panel="preview"]',
    );
    const codePanel = root.querySelector<HTMLElement>('[data-panel="code"]');

    if (previewPanel) previewPanel.hidden = next !== "preview";
    if (codePanel) codePanel.hidden = next !== "code";
    if (next === "code" && codePanel) {
      void ensureLazyCodeBlock(codePanel);
    }
    setView(next);
  }

  return (
    <div ref={rootRef}>
      <SegmentGroup
        aria-label={title ? `${title} view` : "Component view"}
        items={[
          { label: "Preview", value: "preview" },
          { label: "Code", value: "code" },
        ]}
        onValueChange={(next) => {
          if (next === "preview" || next === "code") applyView(next);
        }}
        size="sm"
        value={view}
      />
    </div>
  );
}
