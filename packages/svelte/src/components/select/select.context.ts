import { selectRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { Context, useStyles, withContext } = createSlotRecipeContext({
  name: "Select",
  recipe: selectRecipe,
});
