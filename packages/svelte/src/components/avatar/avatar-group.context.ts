import { avatarGroupRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { withContext, withProvider } = createSlotRecipeContext({
  name: "AvatarGroup",
  recipe: avatarGroupRecipe,
});
