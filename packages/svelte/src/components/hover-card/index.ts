import HoverCardShorthand from "./hover-card.svelte";
import HoverCardArrow from "./hover-card-arrow.svelte";
import HoverCardArrowTip from "./hover-card-arrow-tip.svelte";
import HoverCardContent from "./hover-card-content.svelte";
import HoverCardPositioner from "./hover-card-positioner.svelte";
import HoverCardRoot from "./hover-card-root.svelte";
import HoverCardTrigger from "./hover-card-trigger.svelte";

export type {
  HoverCardArrowProps,
  HoverCardArrowTipProps,
  HoverCardContentProps,
  HoverCardPositionerProps,
  HoverCardTriggerProps,
} from "@ark-ui/svelte";

export const HoverCard = Object.assign(HoverCardShorthand, {
  Arrow: HoverCardArrow,
  ArrowTip: HoverCardArrowTip,
  Content: HoverCardContent,
  Positioner: HoverCardPositioner,
  Root: HoverCardRoot,
  Trigger: HoverCardTrigger,
});
