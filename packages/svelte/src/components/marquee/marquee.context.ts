import { marqueeRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useMarquee,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Marquee",
  recipe: marqueeRecipe,
});
