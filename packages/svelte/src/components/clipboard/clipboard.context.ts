import { clipboardRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { Context, withContext } = createSlotRecipeContext({
  name: "Clipboard",
  recipe: clipboardRecipe,
});
