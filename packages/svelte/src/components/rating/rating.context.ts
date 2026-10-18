import { ratingRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { Context, useStyles, withContext } = createSlotRecipeContext({
  name: "Rating",
  recipe: ratingRecipe,
});
