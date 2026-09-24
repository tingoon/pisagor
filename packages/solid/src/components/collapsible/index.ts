import {
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleRoot,
  CollapsibleTrigger,
} from "./collapsible";

export type {
  CollapsibleContentProps,
  CollapsibleIndicatorProps,
  CollapsibleTriggerProps,
} from "@ark-ui/solid/collapsible";

export type { CollapsibleRootProps } from "./collapsible";

export const Collapsible = Object.assign(CollapsibleRoot, {
  Content: CollapsibleContent,
  Indicator: CollapsibleIndicator,
  Trigger: CollapsibleTrigger,
});
