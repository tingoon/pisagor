import { resizableRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useResizable,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Resizable",
  recipe: resizableRecipe,
});
