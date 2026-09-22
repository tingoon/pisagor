import { useState } from "react";
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

  return (
    <div className="lg:hidden">
      <button
        aria-expanded={open}
        aria-label="Open navigation"
        className="inline-flex size-8 items-center justify-center rounded-lg border border-border/70 bg-card/60 shadow-xs backdrop-blur"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <svg aria-hidden className="size-4" fill="none" viewBox="0 0 24 24">
          <path
            d="M4 7h16M4 12h16M4 17h16"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.75"
          />
        </svg>
      </button>
      {open ? (
        <div className="fixed inset-x-3 top-16 z-50 max-h-[70dvh] overflow-auto rounded-2xl border border-border/65 bg-card/90 p-4 shadow-lg backdrop-blur-xl">
          <nav className="flex flex-col gap-4">
            {sections.map((section) => (
              <div key={section.title}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {section.title}
                </p>
                <ul className="space-y-1">
                  {section.items.map((item) => {
                    const href = frameworkPath(framework, item.slug);
                    const active = currentPath === href || currentPath === `${href}/`;
                    const disabled = item.status === "soon";
                    return (
                      <li key={item.slug || "index"}>
                        {disabled ? (
                          <span className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-sm text-muted-foreground/70">
                            {item.title}
                            <span className="text-[10px] uppercase tracking-wide">Soon</span>
                          </span>
                        ) : (
                          <a
                            className={
                              active
                                ? "block rounded-lg bg-accent/70 px-2.5 py-1.5 text-sm font-medium text-accent-foreground"
                                : "block rounded-lg px-2.5 py-1.5 text-sm text-muted-foreground hover:bg-accent/40 hover:text-foreground"
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
      ) : null}
    </div>
  );
}
