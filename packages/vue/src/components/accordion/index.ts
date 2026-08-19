import {
  AccordionContent,
  AccordionItem,
  AccordionRoot,
  AccordionShorthand,
  AccordionTrigger,
} from "./accordion";

export type { AccordionPresetItem, AccordionProps } from "./accordion";

export const Accordion = Object.assign(AccordionShorthand, {
  Content: AccordionContent,
  Item: AccordionItem,
  Root: AccordionRoot,
  Trigger: AccordionTrigger,
});
