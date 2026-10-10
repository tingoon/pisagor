import { fieldRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useFieldRequired,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Field",
  recipe: fieldRecipe,
});

/** Optional — Field parts may render outside a provider (Group/Set shells). */
export function useField() {
  return Context.get();
}

/** Resolves recipe slots from the nearest Field/Group/Set, or a default recipe. */
export function useFieldSlots(recipe: typeof fieldRecipe = fieldRecipe) {
  return useField()?.slots ?? recipe();
}
