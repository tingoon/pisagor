import { hoverCardRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useHoverCard,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "HoverCard",
  recipe: hoverCardRecipe,
});
