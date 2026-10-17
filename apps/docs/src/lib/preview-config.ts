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

export function isFramedPreview(id: string | undefined): boolean {
  return id != null && FRAMED_PREVIEW_IDS.has(id);
}

export function isOpenInNewTabPreview(id: string | undefined): boolean {
  return id != null && OPEN_IN_NEW_TAB_PREVIEW_IDS.has(id);
}

export function isViewportControlsPreview(id: string | undefined): boolean {
  return id != null && VIEWPORT_CONTROLS_PREVIEW_IDS.has(id);
}
