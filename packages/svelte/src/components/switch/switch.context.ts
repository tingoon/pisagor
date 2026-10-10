import { switchRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const { Context, withContext } = createSlotRecipeContext({
  name: "Switch",
  recipe: switchRecipe,
});
