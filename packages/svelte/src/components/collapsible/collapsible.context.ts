import type { CollapsibleRecipe } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface CollapsibleContextValue {
  slots: CollapsibleRecipe;
}

const ctx = createContext("Collapsible")<CollapsibleContextValue>();
export const setCollapsibleContext = ctx.setContext;
export const useCollapsible = ctx.getContext;
