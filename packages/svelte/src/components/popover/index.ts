import PopoverAnchor from "./popover-anchor.svelte";
import PopoverArrow from "./popover-arrow.svelte";
import PopoverBody from "./popover-body.svelte";
import PopoverCloseTrigger from "./popover-close-trigger.svelte";
import PopoverContent from "./popover-content.svelte";
import PopoverDescription from "./popover-description.svelte";
import PopoverFooter from "./popover-footer.svelte";
import PopoverHeader from "./popover-header.svelte";
import PopoverPositioner from "./popover-positioner.svelte";
import PopoverRoot from "./popover-root.svelte";
import PopoverTitle from "./popover-title.svelte";
import PopoverTrigger from "./popover-trigger.svelte";

export const Popover = Object.assign(PopoverRoot, {
  Anchor: PopoverAnchor,
  Arrow: PopoverArrow,
  Body: PopoverBody,
  CloseTrigger: PopoverCloseTrigger,
  Content: PopoverContent,
  Description: PopoverDescription,
  Footer: PopoverFooter,
  Header: PopoverHeader,
  Positioner: PopoverPositioner,
  Title: PopoverTitle,
  Trigger: PopoverTrigger,
});
