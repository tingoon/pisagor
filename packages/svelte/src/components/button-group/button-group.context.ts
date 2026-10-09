import { buttonGroupRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useButtonGroup,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "ButtonGroup",
  recipe: buttonGroupRecipe,
});
