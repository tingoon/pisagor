/**
 * Examples that fill the viewport (`min-h-svh` app layouts). Their previews
 * render inside a fixed-height, scrollable frame so they can't stretch the
 * docs page (component and block ids share one namespace here).
 */
const FRAMED_PREVIEW_IDS = new Set(["app-shell"]);

export function isFramedPreview(id: string | undefined): boolean {
  return id != null && FRAMED_PREVIEW_IDS.has(id);
}
