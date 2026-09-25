import PopoverBody from "./popover-body.svelte";
import PopoverContent from "./popover-content.svelte";
import PopoverDescription from "./popover-description.svelte";
import PopoverFooter from "./popover-footer.svelte";
import PopoverHeader from "./popover-header.svelte";
import PopoverRoot from "./popover-root.svelte";
import PopoverTitle from "./popover-title.svelte";
import PopoverTrigger from "./popover-trigger.svelte";

export const Popover = Object.assign(PopoverRoot, {
  Body: PopoverBody,
  Content: PopoverContent,
  Description: PopoverDescription,
  Footer: PopoverFooter,
  Header: PopoverHeader,
  Title: PopoverTitle,
  Trigger: PopoverTrigger,
});
