import { tv, type VariantProps } from "tailwind-variants";
import {
  formControlFillCompounds,
  formControlGroupShellBase,
  formControlSurfaceVariantOptions,
} from "./form-control";

export const fileInputRecipe = tv({
  compoundVariants: formControlFillCompounds({ slot: "root" }),
  defaultVariants: {
    /** Control size. */
    size: "md",
    /** Surface variant. */
    surfaceVariant: undefined,
    /** Visual emphasis. */
    variant: "primary",
  },
  slots: {
    control: "sr-only",
    label: ["min-w-0 flex-1 cursor-pointer truncate px-0"],
    root: [...formControlGroupShellBase, "m-0 min-w-0 border-solid p-0"],
  },
  variants: {
    size: {
      lg: { root: "h-9" },
      md: { root: "h-8" },
      sm: { root: "h-7" },
    },
    surfaceVariant: formControlSurfaceVariantOptions,
    variant: {
      primary: {},
      secondary: {},
    },
  },
});

export type FileInputRecipeFn = typeof fileInputRecipe;
export type FileInputRecipe = ReturnType<FileInputRecipeFn>;
export type FileInputRecipeSlot = keyof FileInputRecipe;
export type FileInputVariantProps = VariantProps<FileInputRecipeFn>;
