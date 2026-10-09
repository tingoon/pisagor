import { drawerRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useDrawer,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Drawer",
  recipe: drawerRecipe,
});
