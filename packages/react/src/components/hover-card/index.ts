import { HoverCardArrow, HoverCardContent, HoverCardRoot, HoverCardTrigger } from "./hover-card";

export type {
  HoverCardArrowProps,
  HoverCardContentProps,
  HoverCardRootProps,
  HoverCardTriggerProps,
} from "@ark-ui/react/hover-card";

export type { HoverCardProps } from "./hover-card";

export const HoverCard = Object.assign(HoverCardRoot, {
  Arrow: HoverCardArrow,
  Content: HoverCardContent,
  Trigger: HoverCardTrigger,
});
