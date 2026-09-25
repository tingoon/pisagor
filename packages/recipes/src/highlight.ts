import { tv } from "tailwind-variants";

export const highlightRecipe = tv({
  base: [
    "px-1",
    "bg-primary/20",
    "text-primary",
    "rounded-md",
    "box-decoration-clone",
  ],
});

export type HighlightRecipeFn = typeof highlightRecipe;
export type HighlightRecipe = ReturnType<HighlightRecipeFn>;
export type HighlightRecipeSlot = keyof HighlightRecipe;
