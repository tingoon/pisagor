import type { AccordionItemVariants } from "@pisagor/recipes/accordion";
import { createContext } from "../../internal/utils";

interface AccordionItemContextValue {
  slots: AccordionItemVariants;
}

export const { AccordionItemContext, useAccordionItem } =
  createContext<AccordionItemContextValue>()({
    name: "AccordionItem",
  });
