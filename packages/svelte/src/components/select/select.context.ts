import { selectRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const { Context, withContext, withProvider } = createSlotRecipeContext({
  name: "Select",
  recipe: selectRecipe,
});

/** Optional read (`undefined` outside the provider). */
export function useSelectRoot() {
  return Context.get();
}
