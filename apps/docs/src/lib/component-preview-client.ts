/**
 * Client behavior for `component-preview.astro`: Preview/Code tabs, lazy code
 * blocks, per-preview light/dark toggle, surface + viewport selects (surface
 * choice is shared across previews and persisted), dependency popover and
 * "open in new tab".
 */
import { ensureLazyCodeBlock } from "#/lib/ensure-lazy-codeblock";

const SURFACE_STORAGE_KEY = "pisagor.docs.preview-surface";
const SURFACE_EVENT = "pisagor:preview-surface";

function readStoredSurface(): string {
  try {
    return localStorage.getItem(SURFACE_STORAGE_KEY) ?? "page";
  } catch {
    return "page";
  }
}

function bindSurface(root: HTMLElement) {
  const wrapper = root.querySelector<HTMLElement>("[data-preview-surface]");
  const select = root.querySelector<HTMLSelectElement>(
    '[data-preview-select="surface"]',
  );
  if (!wrapper || !select) return;

  // Class strings come from the real `<Surface>` render, so they track the recipe.
  const classes = new Map<string, string>([["page", "w-full"]]);
  for (const tpl of root.querySelectorAll<HTMLTemplateElement>(
    "template[data-surface-template]",
  )) {
    const el = tpl.content.firstElementChild;
    if (el && tpl.dataset.surfaceTemplate) {
      classes.set(tpl.dataset.surfaceTemplate, el.className);
    }
  }

  function apply(value: string) {
    const next = classes.has(value) ? value : "page";
    if (!wrapper) return;
    wrapper.className = classes.get(next) ?? "w-full";
    wrapper.dataset.previewSurface = next;
    if (select) select.value = next;
  }

  function choose(value: string) {
    try {
      localStorage.setItem(SURFACE_STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    // Keep every preview on the page in sync.
    document.dispatchEvent(new CustomEvent(SURFACE_EVENT, { detail: value }));
  }

  select.addEventListener("change", () => choose(select.value));

  document.addEventListener(SURFACE_EVENT, (event) => {
    if (!root.isConnected) return;
    apply(String((event as CustomEvent<string>).detail));
  });

  apply(readStoredSurface());
}

function bindPreview(root: HTMLElement) {
  if (root.dataset.bound === "1") return;
  root.dataset.bound = "1";
  bindSurface(root);

  const tabs = [...root.querySelectorAll<HTMLElement>("[data-view-tab]")];
  const previewPanel = root.querySelector<HTMLElement>(
    '[data-panel="preview"]',
  );
  const codePanel = root.querySelector<HTMLElement>('[data-panel="code"]');
  const stage = root.querySelector<HTMLElement>("[data-preview-stage]");
  const themeBtn = root.querySelector<HTMLElement>("[data-theme-toggle]");
  const openTabBtn = root.querySelector<HTMLElement>("[data-open-tab]");
  const depsRoot = root.querySelector<HTMLElement>("[data-deps]");
  const depsToggle = root.querySelector<HTMLElement>("[data-deps-toggle]");
  const depsPanel = root.querySelector<HTMLElement>("[data-deps-panel]");
  const sun = themeBtn?.querySelector<HTMLElement>("[data-icon-sun]");
  const moon = themeBtn?.querySelector<HTMLElement>("[data-icon-moon]");

  function setView(view: "preview" | "code") {
    for (const tab of tabs) {
      const active = tab.dataset.view === view;
      tab.toggleAttribute("data-active", active);
      tab.setAttribute("aria-selected", active ? "true" : "false");
    }
    previewPanel?.classList.toggle("hidden", view !== "preview");
    codePanel?.classList.toggle("hidden", view !== "code");
    if (view === "code" && codePanel) {
      void ensureLazyCodeBlock(codePanel);
    }
  }

  for (const tab of tabs) {
    tab.addEventListener("click", () => {
      setView(tab.dataset.view === "code" ? "code" : "preview");
    });
  }

  const previewThemeRoot = root.querySelector<HTMLElement>(
    '[data-panel="preview"]',
  );

  function getDocsTheme(): "light" | "dark" {
    return document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  }

  function getPreviewTheme(): "light" | "dark" {
    const stored = previewThemeRoot?.dataset.previewTheme;
    if (stored === "dark" || stored === "light") return stored;
    return getDocsTheme();
  }

  function setPreviewTheme(next: "light" | "dark") {
    if (!previewThemeRoot) return;
    // In-memory only for this preview — never localStorage / cookies.
    previewThemeRoot.dataset.previewTheme = next;
    previewThemeRoot.classList.toggle("dark", next === "dark");
    previewThemeRoot.classList.toggle("light", next === "light");
    syncThemeIcons();
  }

  function syncThemeIcons() {
    const dark = getPreviewTheme() === "dark";
    if (sun) sun.hidden = !dark; // show sun when dark (click to go light)
    if (moon) moon.hidden = dark; // show moon when light (click to go dark)
    themeBtn?.setAttribute(
      "aria-label",
      dark ? "Switch preview to light mode" : "Switch preview to dark mode",
    );
  }

  // Default: same as docs page theme (no persisted preview preference).
  setPreviewTheme(getDocsTheme());

  themeBtn?.addEventListener("click", () => {
    setPreviewTheme(getPreviewTheme() === "dark" ? "light" : "dark");
  });

  openTabBtn?.addEventListener("click", () => {
    const href = root.dataset.previewHref;
    const previewTheme = getPreviewTheme();

    // Prefer the hydrated standalone preview page when available.
    if (href) {
      const url = new URL(href, window.location.href);
      url.searchParams.set("theme", previewTheme);
      window.open(url.href, "_blank", "noopener,noreferrer");
      return;
    }

    // Fallback when no standalone preview route is set (static snapshot).
    if (!stage) return;
    const styles = [
      ...document.querySelectorAll('link[rel="stylesheet"], style'),
    ]
      .map((node) => node.outerHTML)
      .join("\n");
    const title = root.dataset.package || "Preview";
    const previewDark = previewTheme === "dark";
    const html = `<!doctype html>
<html lang="en" class="${previewDark ? "dark" : ""}">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${title}</title>
  ${styles}
</head>
<body class="min-h-dvh bg-background p-0 text-foreground">
<div class="mx-auto w-full">${stage.innerHTML}</div>
</body>
</html>`;
    // `noopener` in windowFeatures returns null — open first, then disown.
    const win = window.open("about:blank", "_blank");
    if (!win) return;
    win.opener = null;
    win.document.open();
    win.document.write(html);
    win.document.close();
  });

  function closeDeps() {
    depsPanel?.classList.add("hidden");
    depsToggle?.setAttribute("aria-expanded", "false");
  }

  depsToggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    const willOpen = depsPanel?.classList.contains("hidden");
    depsPanel?.classList.toggle("hidden", !willOpen);
    depsToggle.setAttribute("aria-expanded", willOpen ? "true" : "false");
  });

  document.addEventListener("click", (event) => {
    if (!depsRoot) return;
    if (!depsRoot.contains(event.target as Node)) closeDeps();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDeps();
  });

  const viewportSelect = root.querySelector<HTMLSelectElement>(
    '[data-preview-select="viewport"]',
  );
  viewportSelect?.addEventListener("change", () => {
    const size = viewportSelect.value;
    if (stage && (size === "tablet" || size === "mobile" || size === "desktop"))
      stage.dataset.viewport = size;
  });
}

/** Wire every `[data-component-preview]` on the page (idempotent). */
export function bindComponentPreviews() {
  document
    .querySelectorAll<HTMLElement>("[data-component-preview]")
    .forEach(bindPreview);
}
