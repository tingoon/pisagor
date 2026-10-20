import { tooltipRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { Context, withContext, withProvider } = createSlotRecipeContext({
  name: "Tooltip",
  recipe: tooltipRecipe,
});
