import type { ItemVariantProps } from "@pisagor/recipes/item";
import { createContext } from "../../internal/utils/create-context";

export interface ItemGroupContextValue extends ItemVariantProps {}

export const [provideItemGroupContext, , useItemGroupContextRef] =
  createContext<ItemGroupContextValue>({
    name: "ItemGroup",
    strict: false,
  });
