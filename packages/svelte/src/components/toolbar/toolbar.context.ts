import { toolbarRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useToolbar,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Toolbar",
  recipe: toolbarRecipe,
});
