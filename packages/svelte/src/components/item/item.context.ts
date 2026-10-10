import type { ItemVariantProps } from "@pisagor/recipes";
import { itemRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useItemStyles,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Item",
  recipe: itemRecipe,
});

export function useItem() {
  return useItemStyles();
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
