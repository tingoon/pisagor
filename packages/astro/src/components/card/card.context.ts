import { cardRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context";

export const {
  useStyles: useCard,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Card",
  recipe: cardRecipe,
});
