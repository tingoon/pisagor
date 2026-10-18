import { avatarRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { withContext, withProvider } = createSlotRecipeContext({
  name: "Avatar",
  recipe: avatarRecipe,
});
