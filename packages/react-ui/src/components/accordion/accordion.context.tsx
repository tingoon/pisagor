import type { AccordionItemVariants } from "@pisagor/recipes/accordion";
import { createContext } from "../../utils";

interface AccordionItemContextValue {
  slots: AccordionItemVariants;
}

export const { AccordionItemContext, useAccordionItem } =
  createContext<AccordionItemContextValue>()({
    name: "AccordionItem",
  });
