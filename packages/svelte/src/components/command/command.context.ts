import { commandRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useCommand,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Command",
  recipe: commandRecipe,
});
