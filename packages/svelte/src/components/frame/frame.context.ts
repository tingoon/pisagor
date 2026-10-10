import { frameRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useFrame,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Frame",
  recipe: frameRecipe,
});
