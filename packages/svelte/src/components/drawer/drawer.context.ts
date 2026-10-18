import { drawerRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useDrawer,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Drawer",
  recipe: drawerRecipe,
});
