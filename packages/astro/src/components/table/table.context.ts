import { tableRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { withContext } = createSlotRecipeContext({
  name: "Table",
  recipe: tableRecipe,
});
