import { tv } from "tailwind-variants";

export const visuallyHiddenRecipe = tv({
  base: "sr-only",
});

export type VisuallyHiddenRecipeFn = typeof visuallyHiddenRecipe;
export type VisuallyHiddenRecipe = ReturnType<VisuallyHiddenRecipeFn>;
export type VisuallyHiddenRecipeSlot = keyof VisuallyHiddenRecipe;
