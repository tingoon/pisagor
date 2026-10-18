import { commandRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useCommand,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Command",
  recipe: commandRecipe,
});
