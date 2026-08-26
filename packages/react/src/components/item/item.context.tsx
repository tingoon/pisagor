import type { ItemVariantProps, ItemVariants } from "@pisagor/styles/ui/item";
import { createContext } from "../../utils";

export interface ItemContextValue extends ItemVariantProps {
  slots: ItemVariants;
}

export const { ItemContext, useItem } = createContext<ItemContextValue>()({
  name: "Item",
});
