import type { ItemRecipe, ItemVariantProps } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export interface ItemContextValue extends ItemVariantProps {
  slots: ItemRecipe;
}

const ctx = createContext("Item")<ItemContextValue>();

export const setItemContext = ctx.setContext;
export const useItem = ctx.getContext;
