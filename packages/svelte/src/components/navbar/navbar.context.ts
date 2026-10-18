import { navbarRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useNavbar,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Navbar",
  recipe: navbarRecipe,
});
