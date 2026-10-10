import { statRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useStat,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Stat",
  recipe: statRecipe,
});
