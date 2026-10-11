import type { Framework } from "#/lib/nav";

/**
 * Stylesheet URLs for a docs page. Every framework shares one sheet (see
 * `shared.css`), so it is downloaded once and cached across frameworks. Use
 * with `<link rel="stylesheet">` so Vite does not side-effect-inject it.
 */
export async function frameworkStylesheetUrls(
  _framework?: Framework,
): Promise<string[]> {
  return [(await import("./shared.css?url")).default];
}
