import { navigationMenuRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useNavigationMenu,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "NavigationMenu",
  recipe: navigationMenuRecipe,
});
