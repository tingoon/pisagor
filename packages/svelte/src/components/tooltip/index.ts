import TooltipShorthand from "./tooltip.svelte";
import TooltipArrow from "./tooltip-arrow.svelte";
import TooltipArrowTip from "./tooltip-arrow-tip.svelte";
import TooltipContent from "./tooltip-content.svelte";
import TooltipPositioner from "./tooltip-positioner.svelte";
import TooltipRoot from "./tooltip-root.svelte";
import TooltipTrigger from "./tooltip-trigger.svelte";

export type {
  TooltipArrowProps,
  TooltipArrowTipProps,
  TooltipContentProps,
  TooltipPositionerProps,
  TooltipTriggerProps,
} from "@ark-ui/svelte";

export const Tooltip = Object.assign(TooltipShorthand, {
  Arrow: TooltipArrow,
  ArrowTip: TooltipArrowTip,
  Content: TooltipContent,
  Positioner: TooltipPositioner,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
});
