import { fileRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useFile,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "File",
  recipe: fileRecipe,
});
