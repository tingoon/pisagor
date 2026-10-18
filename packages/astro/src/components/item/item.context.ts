import { itemRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { useStyles, withContext, withProvider } = createSlotRecipeContext(
  {
    name: "Item",
    recipe: itemRecipe,
  },
);
