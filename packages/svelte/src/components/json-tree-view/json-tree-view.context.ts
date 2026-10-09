import { jsonTreeViewRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const { withContext, withProvider } = createSlotRecipeContext({
  name: "JsonTreeView",
  recipe: jsonTreeViewRecipe,
});
