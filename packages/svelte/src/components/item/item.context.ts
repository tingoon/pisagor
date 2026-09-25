import type { ItemRecipe, ItemVariantProps } from "@pisagor/recipes/item";
import { createContext } from "../../utils/create-context";

export interface ItemContextValue extends ItemVariantProps {
  slots: ItemRecipe;
}

const ctx = createContext<ItemContextValue>({ name: "Item" });

export const setItemContext = ctx.setContext;
export const useItem = ctx.getContext;
