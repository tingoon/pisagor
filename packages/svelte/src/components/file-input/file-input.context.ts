import { fileInputRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useFileInput,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "FileInput",
  recipe: fileInputRecipe,
});
