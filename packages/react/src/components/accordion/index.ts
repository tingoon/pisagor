import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionShorthand,
  AccordionTrigger,
} from "./accordion";

export type {
  AccordionContentProps,
  AccordionItemProps,
  AccordionProps,
  AccordionRootProps,
  AccordionTriggerProps,
} from "./accordion";

export const Accordion = Object.assign(AccordionShorthand, {
  Content: AccordionContent,
  Item: AccordionItem,
  Root: AccordionRoot,
  Trigger: AccordionTrigger,
});
