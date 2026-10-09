import { statRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context";

export const { withContext, withProvider } = createSlotRecipeContext({
  name: "Stat",
  recipe: statRecipe,
});
