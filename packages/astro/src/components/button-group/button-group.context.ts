import { buttonGroupRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const { useStyles, withContext, withProvider } = createSlotRecipeContext(
  {
    name: "ButtonGroup",
    recipe: buttonGroupRecipe,
  },
);
