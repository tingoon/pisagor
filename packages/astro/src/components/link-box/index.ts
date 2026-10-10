import LinkBoxOverlay from "./link-box-overlay.astro";
import LinkBoxRoot from "./link-box-root.astro";

export const LinkBox = Object.assign(LinkBoxRoot, {
  Overlay: LinkBoxOverlay,
});
