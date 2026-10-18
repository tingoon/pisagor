import type { ItemVariantProps } from "@pisagor/recipes";
import { createContext } from "../../internal";

export type ItemGroupContextValue = ItemVariantProps;

export const [provideItemGroupContext, , useItemGroupContextRef] =
  createContext("ItemGroup")<ItemGroupContextValue>({ strict: false });
