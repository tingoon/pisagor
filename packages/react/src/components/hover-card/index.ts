import { HoverCardArrow, HoverCardContent, HoverCardRoot, HoverCardTrigger } from "./hover-card";

export type {
  HoverCardArrowProps,
  HoverCardContentProps,
  HoverCardProps,
  HoverCardRootProps,
  HoverCardTriggerProps,
} from "./hover-card";

export const HoverCard = Object.assign(HoverCardRoot, {
  Arrow: HoverCardArrow,
  Content: HoverCardContent,
  Trigger: HoverCardTrigger,
});
