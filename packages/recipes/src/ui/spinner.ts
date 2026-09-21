import { tv, type VariantProps } from "tailwind-variants";

export const spinnerRecipe = tv({
  base: ["size-4 animate-spin motion-reduce:animate-none!"],
});

export type SpinnerVariantProps = VariantProps<typeof spinnerRecipe>;
export type SpinnerRecipe = ReturnType<typeof spinnerRecipe>;
export type SpinnerRecipeSlot = keyof SpinnerRecipe;
