import { tv, type VariantProps } from "tailwind-variants";

import { formControlShellRecipe } from "./form-control";

export const inputRootRecipe = formControlShellRecipe;

export const inputRecipe = tv({
  slots: {
    clearableRoot: [
      "flex-1",
      "bg-transparent",
      "rounded-none border-0 shadow-none",
      "focus-visible:ring-0",
      "disabled:bg-transparent aria-invalid:ring-0 data-invalid:ring-0",
      "dark:bg-transparent dark:disabled:bg-transparent",
    ],
  },
});

export type InputRootRecipeFn = typeof inputRootRecipe;
export type InputRootVariantProps = VariantProps<InputRootRecipeFn>;
export type InputRootRecipe = ReturnType<InputRootRecipeFn>;
export type InputRootRecipeSlot = keyof InputRootRecipe;

export type InputRecipeFn = typeof inputRecipe;
export type InputRecipe = ReturnType<InputRecipeFn>;
export type InputRecipeSlot = keyof InputRecipe;
