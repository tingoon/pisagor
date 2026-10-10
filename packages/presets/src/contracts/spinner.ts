import { tv } from "tailwind-variants";

export const spinnerRecipe = tv({
  base: ["size-4 animate-spin motion-reduce:animate-none!"],
});

export type SpinnerRecipeFn = typeof spinnerRecipe;
export type SpinnerRecipe = ReturnType<SpinnerRecipeFn>;
export type SpinnerRecipeSlot = keyof SpinnerRecipe;
