import { tv, type VariantProps } from "tailwind-variants";
import {
  formControlFillCompounds,
  formControlSurfaceVariantOptions,
  formControlToggleBase,
} from "./form-control";

export const checkboxGroupRecipe = tv({
  base: ["flex flex-col gap-2"],
});

export const checkboxRecipe = tv({
  compoundVariants: formControlFillCompounds({ slot: "base" }),
  defaultVariants: {
    /** Size scale. */
    size: "md",
    /** Surface variant. */
    surfaceVariant: undefined,
    /** Visual emphasis. */
    variant: "primary",
  },
  slots: {
    base: [
      ...formControlToggleBase,
      "data-focus-visible:data-invalid:border-destructive/64 data-focus-visible:data-invalid:ring-destructive/48",
      "[[data-disabled],[data-checked],[data-invalid]]:shadow-none",
      "data-invalid:border-destructive data-invalid:text-destructive data-invalid:ring-0.75 data-invalid:ring-destructive/24",
      "dark:not-data-checked:bg-input/32",
    ],
    control: [],
    indicator: [
      "absolute -inset-px",
      "flex items-center justify-center",
      "rounded-xs",
      "text-primary-foreground",
      "data-[state=checked]:bg-primary",
      "data-[state=unchecked]:hidden",
      "data-[state=indeterminate]:text-foreground",
    ],
    label: ["text-foreground text-sm font-medium", "data-disabled:opacity-64"],
    root: ["inline-flex items-center gap-2"],
  },
  variants: {
    size: {
      lg: { base: "size-5 rounded-sm" },
      md: { base: "size-4 rounded-xs" },
      sm: { base: "size-3.5 rounded-xs" },
    },
    surfaceVariant: formControlSurfaceVariantOptions,
    variant: {
      primary: {},
      secondary: {},
    },
  },
});

export type CheckboxGroupRecipeFn = typeof checkboxGroupRecipe;
export type CheckboxGroupRecipe = ReturnType<CheckboxGroupRecipeFn>;
export type CheckboxGroupRecipeSlot = keyof CheckboxGroupRecipe;

export type CheckboxRecipeFn = typeof checkboxRecipe;
export type CheckboxRecipe = ReturnType<CheckboxRecipeFn>;
export type CheckboxRecipeSlot = keyof CheckboxRecipe;
export type CheckboxVariantProps = VariantProps<CheckboxRecipeFn>;
