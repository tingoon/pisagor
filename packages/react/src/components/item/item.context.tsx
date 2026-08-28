import type { ItemVariantProps, ItemVariants } from "@pisagor/recipes/item";
import { createContext } from "../../internal/utils";

export interface ItemContextValue extends ItemVariantProps {
  slots: ItemVariants;
}

export const { ItemContext, useItem } = createContext<ItemContextValue>()({
  name: "Item",
});
