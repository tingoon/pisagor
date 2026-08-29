import type { AccordionItemSlots } from "@pisagor/recipes/accordion";
import { createContext } from "../../internal/utils";

interface AccordionItemContextValue {
  slots: AccordionItemSlots;
}

export const { AccordionItemContext, useAccordionItem } =
  createContext<AccordionItemContextValue>()({
    name: "AccordionItem",
  });
