import LinkBoxRoot from "./link-box-root.svelte";
import LinkOverlay from "./link-overlay.svelte";

export const LinkBox = Object.assign(LinkBoxRoot, {
  Overlay: LinkOverlay,
});
