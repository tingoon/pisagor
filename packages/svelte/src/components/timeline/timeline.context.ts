import { timelineItemRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useTimelineItem,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Timeline",
  recipe: timelineItemRecipe,
});
