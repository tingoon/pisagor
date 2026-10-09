import { collapsibleRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useCollapsible,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Collapsible",
  recipe: collapsibleRecipe,
});
