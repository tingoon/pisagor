import CollapsibleContent from "./collapsible-content.svelte";
import CollapsibleIndicator from "./collapsible-indicator.svelte";
import CollapsibleRoot from "./collapsible-root.svelte";
import CollapsibleTrigger from "./collapsible-trigger.svelte";

export const Collapsible = Object.assign(CollapsibleRoot, {
  Content: CollapsibleContent,
  Indicator: CollapsibleIndicator,
  Trigger: CollapsibleTrigger,
});
