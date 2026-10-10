import { avatarRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const { withContext, withProvider } = createSlotRecipeContext({
  name: "Avatar",
  recipe: avatarRecipe,
});
