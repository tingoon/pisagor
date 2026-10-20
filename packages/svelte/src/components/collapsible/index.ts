import CollapsibleShorthand from "./collapsible.svelte";
import Body from "./collapsible-body.svelte";
import Content from "./collapsible-content.svelte";
import Indicator from "./collapsible-indicator.svelte";
import Root from "./collapsible-root.svelte";
import Trigger from "./collapsible-trigger.svelte";

export type {
  CollapsibleContentProps,
  CollapsibleIndicatorProps,
  CollapsibleRootProps,
  CollapsibleTriggerProps,
} from "@ark-ui/svelte";

export const Collapsible = Object.assign(CollapsibleShorthand, {
  Body,
  Content,
  Indicator,
  Root,
  Trigger,
});
