import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardRoot,
  HoverCardTrigger,
} from "./hover-card";

export type {
  HoverCardArrowProps,
  HoverCardContentProps,
  HoverCardTriggerProps,
} from "@ark-ui/solid/hover-card";

export type { HoverCardProps, HoverCardRootProps } from "./hover-card";

export const HoverCard = Object.assign(HoverCardRoot, {
  Arrow: HoverCardArrow,
  Content: HoverCardContent,
  Trigger: HoverCardTrigger,
});
