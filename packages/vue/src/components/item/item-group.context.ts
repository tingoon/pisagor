import type { ItemVariantProps } from "@pisagor/recipes";
import { createContext } from "../../internal";

export interface ItemGroupContextValue extends ItemVariantProps {}

export const [provideItemGroupContext, , useItemGroupContextRef] =
  createContext("ItemGroup")<ItemGroupContextValue>({ strict: false });
