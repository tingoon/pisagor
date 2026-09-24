import type { ItemVariantProps } from "@pisagor/recipes/item";
import { createContext } from "../../utils";

export type ItemGroupContextValue = ItemVariantProps;

export const { ItemGroupContext, useItemGroup } = createContext<ItemGroupContextValue>()({
  name: "ItemGroup",
  strict: false,
});
