/**
 * Client behavior for `component-preview.astro`: "open in new tab".
 * Preview/Code tabs, surface / viewport / theme controls are React islands.
 */

function bindPreview(root: HTMLElement) {
  if (root.dataset.bound === "1") return;
  root.dataset.bound = "1";

  const stage = root.querySelector<HTMLElement>("[data-preview-stage]");
  const openTabBtn = root.querySelector<HTMLElement>("[data-open-tab]");
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
    const previewDark = previewTheme === "dark";
    const html = `<!doctype html>
<html lang="en" class="${previewDark ? "dark" : ""}">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Preview</title>
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
}

/** Wire every `[data-component-preview]` on the page (idempotent). */
export function bindComponentPreviews() {
  document
    .querySelectorAll<HTMLElement>("[data-component-preview]")
    .forEach(bindPreview);
}
