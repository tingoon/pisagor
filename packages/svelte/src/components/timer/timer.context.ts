import { timerItemGroupRecipe, timerRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  Context,
  Context: TimerStylesContext,
  useStyles: useTimer,
  withContext: withTimerContext,
  withProvider: withTimerProvider,
} = createSlotRecipeContext({
  name: "Timer",
  recipe: timerRecipe,
});

export const {
  Context: TimerItemGroupStylesContext,
  useStyles: useTimerItemGroup,
  withContext: withTimerItemGroupContext,
  withProvider: withTimerItemGroupProvider,
} = createSlotRecipeContext({
  name: "Timer",
  recipe: timerItemGroupRecipe,
});
