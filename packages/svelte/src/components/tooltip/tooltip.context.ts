import { tooltipRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { Context, withContext } = createSlotRecipeContext({
  name: "Tooltip",
  recipe: tooltipRecipe,
});
