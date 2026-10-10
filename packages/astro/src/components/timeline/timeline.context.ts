import { timelineItemRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context";

export const { withContext, withProvider } = createSlotRecipeContext({
  name: "Timeline",
  recipe: timelineItemRecipe,
});
