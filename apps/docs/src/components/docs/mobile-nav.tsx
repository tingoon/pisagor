import { useEffect, useId, useRef, useState } from "react";
import type { Framework, NavSection } from "../../lib/nav";
import { frameworkPath } from "../../lib/nav";

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
        className="docs-press inline-flex size-8 items-center justify-center rounded-lg border border-border/70 bg-card/60 shadow-xs backdrop-blur"
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
            className="docs-material-heavy docs-sheet-panel fixed inset-x-3 top-16 z-50 max-h-[70dvh] overflow-auto rounded-2xl border border-white/20 p-4 shadow-lg dark:border-white/10"
            id={panelId}
            role="dialog"
          >
            <nav className="flex flex-col gap-5">
              {sections.map((section) => (
                <div key={section.title}>
                  <p className="docs-label mb-3">{section.title}</p>
                  <ul className="space-y-px">
                    {section.items.map((item) => {
                      const href = frameworkPath(framework, item.slug);
                      const active = currentPath === href || currentPath === `${href}/`;
                      const disabled = item.status === "soon";
                      return (
                        <li key={item.slug || "index"}>
                          {disabled ? (
                            <span className="docs-nav-link flex items-center justify-between rounded-md px-2.5 py-1.5 text-foreground/40">
                              {item.title}
                              <span className="docs-label">Soon</span>
                            </span>
                          ) : (
                            <a
                              className={
                                active
                                  ? "docs-press docs-nav-link block rounded-md bg-accent/80 px-2.5 py-1.5 font-medium text-accent-foreground"
                                  : "docs-press docs-nav-link block rounded-md px-2.5 py-1.5 text-foreground/65 hover:bg-accent/40 hover:text-foreground"
                              }
                              href={href}
                              onClick={() => setOpen(false)}
                            >
                              {item.title}
                            </a>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </>
      ) : null}
    </div>
  );
}
