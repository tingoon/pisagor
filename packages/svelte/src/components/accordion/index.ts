import AccordionShorthand from "./accordion.svelte";
import AccordionItem from "./accordion-item.svelte";
import AccordionItemBody from "./accordion-item-body.svelte";
import AccordionItemContent from "./accordion-item-content.svelte";
import AccordionItemIndicator from "./accordion-item-indicator.svelte";
import AccordionItemTrigger from "./accordion-item-trigger.svelte";
import AccordionRoot from "./accordion-root.svelte";

export const Accordion = Object.assign(AccordionShorthand, {
  Item: AccordionItem,
  ItemBody: AccordionItemBody,
  ItemContent: AccordionItemContent,
  ItemIndicator: AccordionItemIndicator,
  ItemTrigger: AccordionItemTrigger,
  Root: AccordionRoot,
});
