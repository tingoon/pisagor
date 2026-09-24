import type { AccordionItemRecipe } from "@pisagor/recipes/accordion";
import { createContext } from "../../utils/create-context";

export interface AccordionItemContextValue {
  slots: AccordionItemRecipe;
}

const ctx = createContext<AccordionItemContextValue>({ name: "AccordionItem" });
export const setAccordionItemContext = ctx.setContext;
export const useAccordionItem = ctx.getContext;
