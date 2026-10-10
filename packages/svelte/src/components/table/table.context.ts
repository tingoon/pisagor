import { tableRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useTable,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Table",
  recipe: tableRecipe,
});
