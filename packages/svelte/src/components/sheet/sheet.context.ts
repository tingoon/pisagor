import { sheetRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useSheet,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Sheet",
  recipe: sheetRecipe,
});
