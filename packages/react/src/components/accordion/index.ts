import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
  AccordionShorthand,
} from "./accordion";

export type {
  AccordionItemContentProps,
  AccordionItemProps,
  AccordionItemTriggerProps,
  AccordionRootProps,
} from "@ark-ui/react/accordion";

export type { AccordionProps } from "./accordion";

export const Accordion = Object.assign(AccordionShorthand, {
  Item: AccordionItem,
  ItemContent: AccordionItemContent,
  ItemTrigger: AccordionItemTrigger,
  Root: AccordionRoot,
});
