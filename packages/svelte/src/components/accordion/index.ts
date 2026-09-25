import AccordionShorthand from "./accordion.svelte";
import AccordionItem from "./accordion-item.svelte";
import AccordionItemContent from "./accordion-item-content.svelte";
import AccordionItemTrigger from "./accordion-item-trigger.svelte";
import AccordionRoot from "./accordion-root.svelte";

export const Accordion = Object.assign(AccordionShorthand, {
  Item: AccordionItem,
  ItemContent: AccordionItemContent,
  ItemTrigger: AccordionItemTrigger,
  Root: AccordionRoot,
});
