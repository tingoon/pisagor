import type { UseProgressReturn } from "@ark-ui/svelte/progress";
import { circularProgressRecipe } from "@pisagor/recipes";
import { createSlotRecipeContext } from "../../internal/create-slot-recipe-context.svelte";

export const {
  useStyles: useCircularProgress,
  withContext,
  withProvider,
} = createSlotRecipeContext({
  name: "CircularProgress",
  recipe: circularProgressRecipe,
});

/**
 * Progressbar semantics for the root. Ark only exposes them on `Track` /
 * `Circle`, which the hand-drawn ring does not render.
 */
export function getProgressbarProps(progress: ReturnType<UseProgressReturn>) {
  if (progress.indeterminate) return { role: "progressbar" } as const;

  return {
    "aria-valuemax": progress.max,
    "aria-valuemin": progress.min,
    "aria-valuenow": progress.value ?? undefined,
    "aria-valuetext": progress.valueAsString,
    role: "progressbar",
  } as const;
}
