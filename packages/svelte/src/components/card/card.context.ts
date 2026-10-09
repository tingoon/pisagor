import { cardRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useCard,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Card",
  recipe: cardRecipe,
});
