import { switchRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { Context, withContext } = createSlotRecipeContext({
  name: "Switch",
  recipe: switchRecipe,
});
