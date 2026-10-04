import type { AccordionItemRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface AccordionItemContextValue {
  slots: AccordionItemRecipe;
}

const ctx = createContext("AccordionItem")<AccordionItemContextValue>();
export const setAccordionItemContext = ctx.setContext;
export const useAccordionItem = ctx.getContext;
