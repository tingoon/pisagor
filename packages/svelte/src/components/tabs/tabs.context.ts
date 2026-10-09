import { tabsRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useTabs,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Tabs",
  recipe: tabsRecipe,
});
