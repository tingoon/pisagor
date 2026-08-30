import { tv, type VariantProps } from "tailwind-variants";

export const visuallyHiddenRecipe = tv({
  base: "sr-only",
});

export type VisuallyHiddenVariantProps = VariantProps<typeof visuallyHiddenRecipe>;
export type VisuallyHiddenRecipe = ReturnType<typeof visuallyHiddenRecipe>;
export type VisuallyHiddenRecipeSlot = keyof VisuallyHiddenRecipe;
