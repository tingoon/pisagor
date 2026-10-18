import { emptyStateRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { withContext, withProvider } = createSlotRecipeContext({
  name: "EmptyState",
  recipe: emptyStateRecipe,
});
