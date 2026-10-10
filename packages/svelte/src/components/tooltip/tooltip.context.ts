import { tooltipRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const { Context, withContext } = createSlotRecipeContext({
  name: "Tooltip",
  recipe: tooltipRecipe,
});
