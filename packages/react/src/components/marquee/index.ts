import { MarqueeContent, MarqueeEdge, MarqueeItem, MarqueeRoot, MarqueeShorthand } from "./marquee";

export type {
  MarqueeContentProps,
  MarqueeEdgeProps,
  MarqueeItemProps,
  MarqueeProps,
  MarqueeRootProps,
} from "./marquee";

export const Marquee = Object.assign(MarqueeShorthand, {
  Content: MarqueeContent,
  Edge: MarqueeEdge,
  Item: MarqueeItem,
  Root: MarqueeRoot,
});
