import { stepsItemRecipe, stepsRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  Context: StepsStylesContext,
  useStyles: useSteps,
  withContext: withStepsContext,
  withProvider: withStepsProvider,
} = createSlotRecipeContext({
  name: "Steps",
  recipe: stepsRecipe,
});

export const {
  Context: StepsItemStylesContext,
  useStyles: useStepsItem,
  withContext: withStepsItemContext,
  withProvider: withStepsItemProvider,
} = createSlotRecipeContext({
  name: "Steps",
  recipe: stepsItemRecipe,
});
