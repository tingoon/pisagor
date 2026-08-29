import type { ItemSlots, ItemVariantProps } from "@pisagor/recipes/item";
import { createContext } from "../../internal/utils";

export interface ItemContextValue extends ItemVariantProps {
  slots: ItemSlots;
}

export const { ItemContext, useItem } = createContext<ItemContextValue>()({
  name: "Item",
});
