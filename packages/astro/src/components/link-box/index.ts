import LinkBoxRoot from "./link-box.astro";
import LinkBoxOverlay from "./link-box-overlay.astro";

export const LinkBox = Object.assign(LinkBoxRoot, {
  Overlay: LinkBoxOverlay,
});
