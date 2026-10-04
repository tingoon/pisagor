import type { AccordionItemRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils";

interface AccordionItemContextValue {
  slots: AccordionItemRecipe;
}

export const { AccordionItemContext, useAccordionItem } =
  createContext("AccordionItem")<AccordionItemContextValue>();
