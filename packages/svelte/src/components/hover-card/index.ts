import HoverCardArrow from "./hover-card-arrow.svelte";
import HoverCardContent from "./hover-card-content.svelte";
import HoverCardRoot from "./hover-card-root.svelte";
import HoverCardTrigger from "./hover-card-trigger.svelte";

export const HoverCard = Object.assign(HoverCardRoot, {
  Arrow: HoverCardArrow,
  Content: HoverCardContent,
  Trigger: HoverCardTrigger,
});
