import MarqueeContent from "./marquee-content.svelte";
import MarqueeEdge from "./marquee-edge.svelte";
import MarqueeItem from "./marquee-item.svelte";
import MarqueeRoot from "./marquee-root.svelte";
import MarqueeShorthand from "./marquee-shorthand.svelte";
import MarqueeViewport from "./marquee-viewport.svelte";

export type {
  MarqueeContentProps,
  MarqueeEdgeProps,
  MarqueeItemProps,
  MarqueeViewportProps,
} from "@ark-ui/svelte";

export const Marquee = Object.assign(MarqueeShorthand, {
  Content: MarqueeContent,
  Edge: MarqueeEdge,
  Item: MarqueeItem,
  Root: MarqueeRoot,
  Viewport: MarqueeViewport,
});
