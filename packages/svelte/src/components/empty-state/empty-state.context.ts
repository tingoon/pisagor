import { emptyStateRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useEmptyState,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "EmptyState",
  recipe: emptyStateRecipe,
});
