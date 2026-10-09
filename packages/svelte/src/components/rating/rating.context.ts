import { ratingRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useRating,
  withContext,
} = createSlotRecipeContext({
  name: "Rating",
  recipe: ratingRecipe,
});
