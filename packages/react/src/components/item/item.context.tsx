import type { ItemVariants } from "@pisagor/styles/ui/item";
import { createContext } from "../../utils";

interface ItemContextValue {
  slots: ItemVariants;
}

export const { ItemContext, useItem } = createContext<ItemContextValue>()({
  name: "Item",
});
