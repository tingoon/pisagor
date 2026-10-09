import { emptyStateRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context";

export const { withContext, withProvider } = createSlotRecipeContext({
  name: "EmptyState",
  recipe: emptyStateRecipe,
});
