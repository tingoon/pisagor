import { scrollAreaRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useScrollArea,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "ScrollArea",
  recipe: scrollAreaRecipe,
});
