import { linkBoxRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { withContext, withProvider } = createSlotRecipeContext({
  name: "LinkBox",
  recipe: linkBoxRecipe,
});
