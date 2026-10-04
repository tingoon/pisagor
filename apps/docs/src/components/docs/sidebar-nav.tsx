import { MagnifyingGlass } from "@phosphor-icons/react";
import { useId, useMemo, useState } from "react";
import type { Framework, NavSection } from "#/lib/nav";
import { frameworkPath } from "#/lib/nav";

function filterSections(sections: NavSection[], query: string): NavSection[] {
  const q = query.trim().toLowerCase();
  if (!q) return sections;

  return sections
    .map((section) => ({
      ...section,
      items: section.items.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          section.title.toLowerCase().includes(q),
      ),
    }))
    .filter((section) => section.items.length > 0);
}

function normalizePath(value: string): string {
  return value.replace(/\/$/, "") || "/";
}

/** Exact match, or prefix match only when no longer sidebar href also matches. */
function isNavActive(
  path: string,
  href: string,
  allHrefs: readonly string[],
): boolean {
  if (path === href) return true;
  if (href === "/" || !path.startsWith(`${href}/`)) return false;
  return !allHrefs.some(
    (other) =>
      other !== href &&
      other.startsWith(`${href}/`) &&
      (path === other || path.startsWith(`${other}/`)),
  );
}

export default function SidebarNav({
  framework,
  sections,
  currentPath,
  onNavigate,
}: {
  framework: Framework;
  sections: NavSection[];
  currentPath: string;
  onNavigate?: () => void;
}) {
  const [query, setQuery] = useState("");
  const filterId = useId();
  const visible = useMemo(
    () => filterSections(sections, query),
    [sections, query],
  );
  const path = normalizePath(currentPath);
  const navHrefs = useMemo(
    () =>
      visible.flatMap((section) =>
        section.items
          .filter((item) => item.status !== "soon")
          .map((item) => normalizePath(frameworkPath(framework, item.slug))),
      ),
    [framework, visible],
  );

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="shrink-0 px-1 pb-3">
        <label className="sr-only" htmlFor={filterId}>
          Filter
        </label>
        <div className="relative">
          <MagnifyingGlass
            aria-hidden
            className="pointer-events-none absolute inset-s-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground"
            weight="bold"
          />
          <input
            autoComplete="off"
            className="docs-press h-8 w-full rounded-lg border border-border/70 bg-background ps-8 pe-2.5 text-foreground text-sm outline-none placeholder:text-muted-foreground/80 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
            id={filterId}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Filter"
            spellCheck={false}
            type="search"
            value={query}
          />
        </div>
      </div>

      <nav className="scrollbar-thin flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto [scrollbar-color:color-mix(in_oklab,var(--border)_80%,transparent)_transparent]">
        {visible.length === 0 ? (
          <p className="px-2.5 text-muted-foreground text-sm">No matches</p>
        ) : (
          visible.map((section) => (
            <div key={section.title}>
              <p className="docs-label mb-3 px-2.5">{section.title}</p>
              <ul className="space-y-px">
                {section.items.map((item) => {
                  const href = frameworkPath(framework, item.slug);
                  const hrefNorm = normalizePath(href);
                  const active = isNavActive(path, hrefNorm, navHrefs);
                  const soon = item.status === "soon";
                  return (
                    <li key={item.slug || section.title}>
                      {soon ? (
                        <span className="docs-nav-link flex items-center justify-between rounded-md px-2.5 py-1.5 text-foreground/40">
                          {item.title}
                          <span className="rounded border border-border/50 px-1.5 py-px font-semibold text-2.5 text-muted-foreground/70 uppercase tracking-[0.06em]">
                            Soon
                          </span>
                        </span>
                      ) : (
                        <a
                          aria-current={active ? "page" : undefined}
                          className={
                            active
                              ? "docs-press docs-nav-link flex items-center rounded-md bg-accent/80 px-2.5 py-1.5 font-medium text-accent-foreground"
                              : "docs-press docs-nav-link flex items-center rounded-md px-2.5 py-1.5 text-foreground/65 hover:bg-accent/40 hover:text-foreground"
                          }
                          href={href}
                          onClick={onNavigate}
                        >
                          {item.title}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))
        )}
      </nav>
    </div>
  );
}
