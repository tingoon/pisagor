import { Tooltip as TooltipPrimitive } from "@ark-ui/svelte";
import TooltipShorthand from "./tooltip.svelte";
import TooltipArrow from "./tooltip-arrow.svelte";
import TooltipContent from "./tooltip-content.svelte";
import TooltipRoot from "./tooltip-root.svelte";

export type {
  TooltipArrowProps,
  TooltipContentProps,
  TooltipPositionerProps,
  TooltipTriggerProps,
} from "@ark-ui/svelte";

export const Tooltip = Object.assign(TooltipShorthand, {
  Arrow: TooltipArrow,
  ArrowTip: TooltipPrimitive.ArrowTip,
  Content: TooltipContent,
  Positioner: TooltipPrimitive.Positioner,
  Root: TooltipRoot,
  Trigger: TooltipPrimitive.Trigger,
});
