import { checkboxRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { withContext, withProvider } = createSlotRecipeContext({
  name: "Checkbox",
  recipe: checkboxRecipe,
});
