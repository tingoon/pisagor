import { carouselRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useCarousel,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Carousel",
  recipe: carouselRecipe,
});
