import { fileInputRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useFileInput,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "FileInput",
  recipe: fileInputRecipe,
});
