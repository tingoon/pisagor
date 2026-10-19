import { ratingRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { withContext, withProvider } = createSlotRecipeContext({
  name: "Rating",
  recipe: ratingRecipe,
});
