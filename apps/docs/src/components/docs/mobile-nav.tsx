import { useEffect, useId, useRef, useState } from "react";
import type { Framework, NavSection } from "#/lib/nav";
import SidebarNav from "./sidebar-nav";

export default function MobileNav({
  framework,
  sections,
  currentPath,
}: {
  framework: Framework;
  sections: NavSection[];
  currentPath: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="relative lg:hidden" ref={rootRef}>
      <button
        aria-controls={panelId}
        aria-expanded={open}
        aria-label={open ? "Close navigation" : "Open navigation"}
        className="docs-press inline-flex size-8 items-center justify-center rounded-lg border border-border/70 bg-background"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <svg aria-hidden className="size-4" fill="none" viewBox="0 0 24 24">
          {open ? (
            <path
              d="M6 6l12 12M18 6 6 18"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.75"
            />
          ) : (
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.75"
            />
          )}
        </svg>
      </button>
      {open ? (
        <>
          <button
            aria-label="Dismiss navigation"
            className="docs-sheet-scrim fixed inset-0 z-40 cursor-default border-0 bg-black/20 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
            type="button"
          />
          <div
            aria-label="Navigation"
            className="docs-sheet-panel fixed inset-x-3 top-14 z-50 max-h-[70dvh] overflow-hidden rounded-2xl border border-border/70 bg-background p-4 shadow-lg"
            id={panelId}
            role="dialog"
          >
            <div className="h-full max-h-[calc(70dvh-2rem)]">
              <SidebarNav
                currentPath={currentPath}
                framework={framework}
                onNavigate={() => setOpen(false)}
                sections={sections}
              />
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
