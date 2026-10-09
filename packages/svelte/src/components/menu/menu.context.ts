import { menuRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useMenu,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Menu",
  recipe: menuRecipe,
});
