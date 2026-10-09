import { dropdownMenuRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useDropdownMenu,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "DropdownMenu",
  recipe: dropdownMenuRecipe,
});
