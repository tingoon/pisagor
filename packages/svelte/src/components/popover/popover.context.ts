import { popoverRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: usePopoverContent,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Popover",
  recipe: popoverRecipe,
});
