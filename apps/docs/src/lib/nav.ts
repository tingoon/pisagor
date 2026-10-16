import {
  astroComponentSections,
  blockSections,
  componentSections,
  formSections,
} from "./nav-sections";

export type Framework = "react" | "vue" | "svelte" | "solid" | "astro";

export type DocsArea = "components" | "blocks" | "forms";

type NavItem = {
  title: string;
  slug: string;
  status?: "ready" | "soon";
};

export type NavSection = {
  title: string;
  items: NavItem[];
};

/** Ordered by relative usage (most → least). */
export const frameworks: { id: Framework; label: string }[] = [
  { id: "react", label: "React" },
  { id: "vue", label: "Vue" },
  { id: "svelte", label: "Svelte" },
  { id: "solid", label: "Solid" },
  { id: "astro", label: "Astro" },
];

export const mainNav: { id: DocsArea; label: string; slug: string }[] = [
  { id: "components", label: "Components", slug: "" },
  { id: "blocks", label: "Blocks", slug: "blocks" },
  { id: "forms", label: "Forms", slug: "forms" },
];

/** Astro/Vite `base`; always ends with `/` (`/` or `/pisagor/`). */
function docsBase(): string {
  return import.meta.env.BASE_URL ?? "/";
}

/** Prefix a site path with the configured docs base. */
export function withDocsBase(path = ""): string {
  const base = docsBase();
  const clean = path.replace(/^\/+/, "");
  if (!clean) {
    const trimmed = base.replace(/\/$/, "");
    return trimmed || "/";
  }
  return `${base}${clean}`;
}

/** Drop the docs base from a pathname so framework/area parsing stays stable. */
export function stripDocsBase(pathname: string): string {
  const base = docsBase().replace(/\/$/, "");
  if (base && (pathname === base || pathname.startsWith(`${base}/`))) {
    return pathname.slice(base.length) || "/";
  }
  return pathname || "/";
}

export function getDocsArea(pathname: string): DocsArea {
  const parts = stripDocsBase(pathname).split("/").filter(Boolean);
  const section = parts[1];
  if (section === "blocks") return "blocks";
  if (section === "forms") return "forms";
  return "components";
}

/** Unsupported area stub — same "Getting started" label as shipped packages. */
function soonGettingStarted(slug: string): NavSection[] {
  return [
    {
      items: [{ slug, status: "soon", title: "Introduction" }],
      title: "Getting started",
    },
  ];
}

/** Sidebar list for the active main-nav area. */
export function getSidebarNav(
  framework: Framework,
  area: DocsArea,
): NavSection[] {
  if (area === "blocks") {
    return blockSections;
  }
  if (area === "forms") {
    if (framework === "astro") {
      return soonGettingStarted("forms");
    }
    return formSections;
  }

  if (framework === "astro") return astroComponentSections;
  return componentSections;
}

export function frameworkPath(framework: Framework, slug = "") {
  return withDocsBase(slug ? `/${framework}/${slug}` : `/${framework}`);
}

/** Areas each framework ships docs for (main-nav + switcher). */
const frameworkAreas: Record<Framework, DocsArea[]> = {
  astro: ["components"],
  react: ["components", "forms", "blocks"],
  solid: ["components", "forms", "blocks"],
  svelte: ["components", "forms", "blocks"],
  vue: ["components", "forms", "blocks"],
};

export function getMainNav(framework: Framework) {
  const allowed = new Set(frameworkAreas[framework]);
  return mainNav.filter((item) => allowed.has(item.id));
}

/** Intro slug for a docs area (used when a page has no counterpart). */
function areaIntroSlug(area: DocsArea): string {
  if (area === "blocks") return "blocks/app-shell";
  if (area === "forms") return "forms";
  return "";
}

/** Doc section tabs under `/components|forms/<id>/<tab>`. */
const COMPONENT_DOC_TABS = new Set(["design", "develop"]);

/** Drop a trailing doc tab segment so sidebar slugs still match. */
function stripComponentDocTab(slug: string): string {
  const segments = slug.split("/").filter(Boolean);
  const last = segments.at(-1);
  if (
    segments.length >= 2 &&
    last &&
    COMPONENT_DOC_TABS.has(last) &&
    (segments[0] === "components" || segments[0] === "forms")
  ) {
    return segments.slice(0, -1).join("/");
  }
  return slug;
}

/** Whether the sidebar lists a ready page for this framework/area/slug. */
function sidebarHasSlug(
  framework: Framework,
  area: DocsArea,
  slug: string,
): boolean {
  return getSidebarNav(framework, area).some((section) =>
    section.items.some((item) => item.slug === slug && item.status !== "soon"),
  );
}

/**
 * Map the current docs URL to the same page on another framework. Falls back to
 * the area intro (or framework home) when that page is not shipped. Component
 * doc tabs (`…/develop`, `…/design`) map to the component root; the target
 * framework redirects to its default tab.
 */
export function swapFrameworkPath(pathname: string, next: Framework) {
  const parts = stripDocsBase(pathname).split("/").filter(Boolean);
  if (parts.length === 0) return frameworkPath(next);

  const area = getDocsArea(pathname);
  if (!frameworkAreas[next].includes(area)) {
    return frameworkPath(next);
  }

  const slug = stripComponentDocTab(parts.slice(1).join("/"));
  if (!sidebarHasSlug(next, area, slug)) {
    return frameworkPath(next, areaIntroSlug(area));
  }

  return frameworkPath(next, slug);
}
