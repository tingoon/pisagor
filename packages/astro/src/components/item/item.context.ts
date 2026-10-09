import { itemRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context";

export const {
  useStyles: useItem,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Item",
  recipe: itemRecipe,
});
