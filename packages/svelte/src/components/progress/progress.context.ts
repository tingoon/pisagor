import { progressRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const { withContext, withProvider } = createSlotRecipeContext({
  name: "Progress",
  recipe: progressRecipe,
});
