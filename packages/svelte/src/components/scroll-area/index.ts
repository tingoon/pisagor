import ScrollAreaShorthand from "./scroll-area.svelte";
import ScrollAreaRoot from "./scroll-area-root.svelte";
import ScrollAreaScrollbar from "./scroll-area-scrollbar.svelte";
import ScrollAreaThumb from "./scroll-area-thumb.svelte";
import ScrollAreaViewport from "./scroll-area-viewport.svelte";

export const ScrollArea = Object.assign(ScrollAreaShorthand, {
  Root: ScrollAreaRoot,
  Scrollbar: ScrollAreaScrollbar,
  Thumb: ScrollAreaThumb,
  Viewport: ScrollAreaViewport,
});
