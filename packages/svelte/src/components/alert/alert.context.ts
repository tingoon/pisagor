import { alertRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  useStyles: useAlert,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Alert",
  recipe: alertRecipe,
});
