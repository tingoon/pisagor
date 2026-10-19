/**
 * Examples that fill the viewport (`min-h-svh` app layouts). Their previews
 * render inside a fixed-height, scrollable frame so they can't stretch the docs
 * page (component and block ids share one namespace here).
 */
const FRAMED_PREVIEW_IDS = new Set(["app-shell"]);

/**
 * Previews that should offer “Open in new tab” (fullscreen standalone page).
 * Opt-in — most component/block demos stay inline only.
 */
const OPEN_IN_NEW_TAB_PREVIEW_IDS = new Set(["app-shell"]);

/**
 * Previews that should offer Desktop / Tablet / Mobile width controls. Opt-in —
 * most demos don’t need responsive testing chrome.
 */
const VIEWPORT_CONTROLS_PREVIEW_IDS = new Set(["app-shell"]);

/**
 * Storybook-style canvas layouts for the docs preview chrome.
 *
 * @see https://storybook.js.org/docs/configure/story-layout
 */
export type PreviewLayout = "centered" | "padded" | "fullscreen";

/**
 * Full-width layout demos — default to Storybook `padded` so the component
 * spans the canvas instead of sitting centered like a compact control.
 */
const PADDED_LAYOUT_PREVIEW_IDS = new Set([
  "accordion",
  "card",
  "collapsible",
  "navbar",
  "resizable",
  "scroll-area",
  "separator",
  "sidebar",
  "surface",
  "toolbar",
]);

export function isFramedPreview(id: string | undefined): boolean {
  return id != null && FRAMED_PREVIEW_IDS.has(id);
}

export function isOpenInNewTabPreview(id: string | undefined): boolean {
  return id != null && OPEN_IN_NEW_TAB_PREVIEW_IDS.has(id);
}

export function isViewportControlsPreview(id: string | undefined): boolean {
  return id != null && VIEWPORT_CONTROLS_PREVIEW_IDS.has(id);
}

/** Default canvas layout for a preview (Storybook `parameters.layout`). */
export function defaultPreviewLayout(
  id: string | undefined,
  framed = isFramedPreview(id),
): PreviewLayout {
  if (framed) return "fullscreen";
  if (id != null && PADDED_LAYOUT_PREVIEW_IDS.has(id)) return "padded";

  return "centered";
}
