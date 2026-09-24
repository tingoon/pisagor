import type { CollapsibleRecipe } from "@pisagor/recipes/collapsible";
import { createContext } from "../../utils/create-context";

export interface CollapsibleContextValue {
  slots: CollapsibleRecipe;
}

const ctx = createContext<CollapsibleContextValue>({ name: "Collapsible" });
export const setCollapsibleContext = ctx.setContext;
export const useCollapsible = ctx.getContext;
