import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
  AccordionShorthand,
} from "./accordion";

export type {
  AccordionItemContentProps,
  AccordionItemTriggerProps,
  AccordionRootProps,
} from "@ark-ui/solid/accordion";

export type { AccordionItemProps, AccordionProps } from "./accordion";

export const Accordion = Object.assign(AccordionShorthand, {
  Item: AccordionItem,
  ItemContent: AccordionItemContent,
  ItemTrigger: AccordionItemTrigger,
  Root: AccordionRoot,
});
