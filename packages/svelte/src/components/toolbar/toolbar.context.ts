import { toolbarRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useToolbar,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Toolbar",
  recipe: toolbarRecipe,
});
