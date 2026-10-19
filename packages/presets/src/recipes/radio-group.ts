import { tv, type VariantProps } from "tailwind-variants";
import {
  formControlFillCompounds,
  formControlRadioToggleBase,
  formControlSurfaceVariantOptions,
} from "./form-control";

export const radioGroupRecipe = tv({
  base: [
    "flex flex-col gap-3 data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:flex-wrap",
    "data-invalid:text-destructive",
  ],
});

export const radioGroupItemRecipe = tv({
  compoundVariants: formControlFillCompounds({
    primary: "bg-input/30 shadow-xs/5",
    slot: "control",
  }),
  defaultVariants: {
    /** Surface variant. */
    surfaceVariant: undefined,
    /** Visual emphasis. */
    variant: "primary",
  },
  slots: {
    base: ["inline-flex items-center gap-2", "data-disabled:opacity-64"],
    control: [
      ...formControlRadioToggleBase,
      "data-focus-visible:data-invalid:border-destructive/64 data-focus-visible:data-invalid:ring-destructive/48",
    ],
  },
  variants: {
    surfaceVariant: formControlSurfaceVariantOptions,
    variant: {
      primary: {},
      secondary: {},
    },
  },
});

export type RadioGroupRecipeFn = typeof radioGroupRecipe;
export type RadioGroupRecipe = ReturnType<RadioGroupRecipeFn>;
export type RadioGroupRecipeSlot = keyof RadioGroupRecipe;

export type RadioGroupItemRecipeFn = typeof radioGroupItemRecipe;
export type RadioGroupItemRecipe = ReturnType<RadioGroupItemRecipeFn>;
export type RadioGroupItemRecipeSlot = keyof RadioGroupItemRecipe;
export type RadioGroupItemVariantProps = VariantProps<RadioGroupItemRecipeFn>;
