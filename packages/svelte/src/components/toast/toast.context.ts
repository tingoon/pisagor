import { toastItemRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { useStyles, withProvider } = createSlotRecipeContext({
  name: "Toast",
  recipe: toastItemRecipe,
});
