import { carouselRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useCarousel,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Carousel",
  recipe: carouselRecipe,
});
