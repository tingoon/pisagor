import { navbarRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useNavbar,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Navbar",
  recipe: navbarRecipe,
});
