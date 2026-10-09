import { emptyStateRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useEmptyState,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "EmptyState",
  recipe: emptyStateRecipe,
});
