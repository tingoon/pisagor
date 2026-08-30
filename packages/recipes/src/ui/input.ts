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

export type InputRootVariantProps = VariantProps<typeof inputRootRecipe>;
export type InputRootRecipe = ReturnType<typeof inputRootRecipe>;
export type InputRootRecipeSlot = keyof InputRootRecipe;

export type InputVariantProps = VariantProps<typeof inputRecipe>;
export type InputRecipe = ReturnType<typeof inputRecipe>;
export type InputRecipeSlot = keyof InputRecipe;
