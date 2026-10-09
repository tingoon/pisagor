import { segmentGroupRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  useStyles: useSegmentGroup,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "SegmentGroup",
  recipe: segmentGroupRecipe,
});
