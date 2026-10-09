import { comboboxRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const { Context, withContext, withProvider } = createSlotRecipeContext({
  name: "Combobox",
  recipe: comboboxRecipe,
});

/** Optional read (`undefined` outside the provider). */
export function useComboboxRoot() {
  return Context.get();
}
