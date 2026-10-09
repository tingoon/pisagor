import { floatingPanelRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useFloatingPanel,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "FloatingPanel",
  recipe: floatingPanelRecipe,
});
