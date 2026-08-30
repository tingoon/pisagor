import type { AccordionItemRecipe } from "@pisagor/recipes/accordion";
import { createContext } from "../../internal/utils";

interface AccordionItemContextValue {
  slots: AccordionItemRecipe;
}

export const { AccordionItemContext, useAccordionItem } =
  createContext<AccordionItemContextValue>()({
    name: "AccordionItem",
  });
