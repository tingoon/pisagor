import { avatarGroupRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const { withContext, withProvider } = createSlotRecipeContext({
  name: "AvatarGroup",
  recipe: avatarGroupRecipe,
});
