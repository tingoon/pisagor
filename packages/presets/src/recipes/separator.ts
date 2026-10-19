import { tv } from "tailwind-variants";

export const separatorRecipe = tv({
  base: [
    "m-0 shrink-0 border-0",
    "bg-input",
    "data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full",
    "data-[orientation=vertical]:w-px data-[orientation=vertical]:not-[[class^='h-']]:not-[[class*='_h-']]:self-stretch",
  ],
});

export type SeparatorRecipeFn = typeof separatorRecipe;
export type SeparatorRecipe = ReturnType<SeparatorRecipeFn>;
export type SeparatorRecipeSlot = keyof SeparatorRecipe;
