import {
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleRoot,
  CollapsibleTrigger,
} from "./collapsible";

export type {
  CollapsibleContentProps,
  CollapsibleIndicatorProps,
  CollapsibleRootProps,
  CollapsibleTriggerProps,
} from "./collapsible";

export const Collapsible = Object.assign(CollapsibleRoot, {
  Content: CollapsibleContent,
  Indicator: CollapsibleIndicator,
  Trigger: CollapsibleTrigger,
});
