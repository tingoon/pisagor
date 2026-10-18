import { timelineItemRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal";

export const {
  Context,
  useStyles: useTimelineItem,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "Timeline",
  recipe: timelineItemRecipe,
});
