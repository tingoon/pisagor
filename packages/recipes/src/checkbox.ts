import { tv } from "tailwind-variants";

export const checkboxGroupRecipe = tv({
  base: ["flex flex-col gap-2"],
});

export const checkboxRecipe = tv({
  slots: {
    base: [
      "data-focus-visible:border-primary data-focus-visible:ring-0.75 data-focus-visible:ring-ring/32 data-focus-visible:ring-offset-1 data-focus-visible:ring-offset-background",
      "data-focus-visible:data-invalid:border-destructive/64 data-focus-visible:data-invalid:ring-destructive/48",
      "data-disabled:opacity-64",
      "[[data-disabled],[data-checked],[data-invalid]]:shadow-none",
      "data-invalid:border-destructive data-invalid:text-destructive data-invalid:ring-0.75 data-invalid:ring-destructive/24",
      "dark:not-data-checked:bg-input/32",
    ],
    indicator: [
      "absolute -inset-px",
      "flex items-center justify-center",
      "rounded-xs",
      "text-primary-foreground",
      "data-[state=checked]:bg-primary",
      "data-[state=unchecked]:hidden",
      "data-[state=indeterminate]:text-foreground",
    ],
  },
});

export type CheckboxGroupRecipeFn = typeof checkboxGroupRecipe;
export type CheckboxGroupRecipe = ReturnType<CheckboxGroupRecipeFn>;
export type CheckboxGroupRecipeSlot = keyof CheckboxGroupRecipe;

export type CheckboxRecipeFn = typeof checkboxRecipe;
export type CheckboxRecipe = ReturnType<CheckboxRecipeFn>;
export type CheckboxRecipeSlot = keyof CheckboxRecipe;
