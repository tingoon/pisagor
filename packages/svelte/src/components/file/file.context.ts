import { fileRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useFile,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "File",
  recipe: fileRecipe,
});
