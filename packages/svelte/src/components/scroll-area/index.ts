import ScrollAreaShorthand from "./scroll-area.svelte";
import ScrollAreaContent from "./scroll-area-content.svelte";
import ScrollAreaCorner from "./scroll-area-corner.svelte";
import ScrollAreaRoot from "./scroll-area-root.svelte";
import ScrollAreaScrollbar from "./scroll-area-scrollbar.svelte";
import ScrollAreaThumb from "./scroll-area-thumb.svelte";
import ScrollAreaViewport from "./scroll-area-viewport.svelte";

export type {
  ScrollAreaContentProps,
  ScrollAreaCornerProps,
  ScrollAreaScrollbarProps,
  ScrollAreaThumbProps,
  ScrollAreaViewportProps,
} from "@ark-ui/svelte";

export const ScrollArea = Object.assign(ScrollAreaShorthand, {
  Content: ScrollAreaContent,
  Corner: ScrollAreaCorner,
  Root: ScrollAreaRoot,
  Scrollbar: ScrollAreaScrollbar,
  Thumb: ScrollAreaThumb,
  Viewport: ScrollAreaViewport,
});
