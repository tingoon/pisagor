import type { ItemRecipe, ItemVariantProps } from "@pisagor/recipes";
import { createContext } from "../../utils";

export interface ItemContextValue extends ItemVariantProps {
  slots: ItemRecipe;
}

export const { ItemContext, useItem } =
  createContext("Item")<ItemContextValue>();
