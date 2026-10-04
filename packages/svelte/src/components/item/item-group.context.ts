import type { ItemVariantProps } from "@pisagor/recipes";
import { createContext } from "../../utils/create-context";

export type ItemGroupContextValue = ItemVariantProps;

const ctx = createContext("ItemGroup")<ItemGroupContextValue>({
  strict: false,
});

export const setItemGroupContext = ctx.setContext;
export const useItemGroup = ctx.getContext;
