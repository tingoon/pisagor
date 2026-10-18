import { sheetRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useSheet,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Sheet",
  recipe: sheetRecipe,
});
