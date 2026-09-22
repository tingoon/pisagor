import { tv } from "tailwind-variants";

export const aspectRatioRecipe = tv({
  base: ["[--ratio:1]", "relative", "w-full", "aspect-(--ratio)"],
});

export type AspectRatioRecipeFn = typeof aspectRatioRecipe;
export type AspectRatioRecipe = ReturnType<AspectRatioRecipeFn>;
export type AspectRatioRecipeSlot = keyof AspectRatioRecipe;
