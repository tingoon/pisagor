import { alertRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { useStyles, withContext, withProvider } = createSlotRecipeContext(
  {
    name: "Alert",
    recipe: alertRecipe,
  },
);
