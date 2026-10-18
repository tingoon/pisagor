import { marqueeRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useMarquee,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Marquee",
  recipe: marqueeRecipe,
});
