import type { ItemRecipe, ItemVariantProps } from "@pisagor/recipes/item";
import { createContext } from "../../internal/utils";

export interface ItemContextValue extends ItemVariantProps {
  slots: ItemRecipe;
}

export const { ItemContext, useItem } = createContext<ItemContextValue>()({
  name: "Item",
});
