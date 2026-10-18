import type { ItemVariantProps } from "@pisagor/recipes";
import { itemRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { Context, useStyles, withContext, withProvider } =
  createSlotRecipeContext({
    name: "Item",
    recipe: itemRecipe,
  });

export function useItem() {
  return useStyles();
}

export function setItemContext(
  value: ItemVariantProps & { slots: ReturnType<typeof itemRecipe> },
) {
  Context.set({
    get slots() {
      return value.slots;
    },
  });
}
