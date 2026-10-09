import { tableRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context";

export const { withContext } = createSlotRecipeContext({
  name: "Table",
  recipe: tableRecipe,
});
