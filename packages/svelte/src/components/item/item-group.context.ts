import type { ItemVariantProps } from "@pisagor/recipes/item";
import { createContext } from "../../utils/create-context";

export type ItemGroupContextValue = ItemVariantProps;

const ctx = createContext<ItemGroupContextValue>({
  name: "ItemGroup",
  strict: false,
});

export const setItemGroupContext = ctx.setContext;
export const useItemGroup = ctx.getContext;
