import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
  AccordionShorthand,
} from "./accordion";

export type {
  AccordionItemProps,
  AccordionPresetItem,
  AccordionProps,
} from "./accordion";

export const Accordion = Object.assign(AccordionShorthand, {
  Item: AccordionItem,
  ItemContent: AccordionItemContent,
  ItemTrigger: AccordionItemTrigger,
  Root: AccordionRoot,
});
