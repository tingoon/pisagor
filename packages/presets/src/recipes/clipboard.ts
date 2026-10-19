import { tv, type VariantProps } from "tailwind-variants";
import {
  formControlFillCompounds,
  formControlShellBase,
  formControlSurfaceVariantOptions,
} from "./form-control";

export const clipboardRecipe = tv({
  compoundVariants: [
    ...formControlFillCompounds({ slot: "input" }),
    ...formControlFillCompounds({ slot: "valueText" }),
  ],
  defaultVariants: {
    /** Size scale of the input, label, and copy control. */
    size: "md",
    /** Surface variant. */
    surfaceVariant: undefined,
    /** Visual emphasis. */
    variant: "primary",
    /** Height scale when showing the value text. */
    valueSize: "md",
  },
  slots: {
    control: ["flex items-center gap-2"],
    field: ["flex flex-col gap-1.5"],
    indicator: ["pointer-events-none"],
    input: [...formControlShellBase],
    label: ["text-sm font-medium"],
    valueText: [...formControlShellBase, "inline-flex items-center"],
  },
  variants: {
    size: {
      lg: { input: "h-9", label: "text-base" },
      md: { input: "h-8" },
      sm: { input: "h-7", label: "text-xs" },
    },
    surfaceVariant: formControlSurfaceVariantOptions,
    valueSize: {
      lg: { valueText: "h-9" },
      md: { valueText: "h-8" },
      sm: { valueText: "h-7" },
      xl: { valueText: "h-10" },
      xs: { valueText: "h-6" },
    },
    variant: {
      primary: {},
      secondary: {},
    },
  },
});

export type ClipboardRecipeFn = typeof clipboardRecipe;
export type ClipboardVariantProps = VariantProps<ClipboardRecipeFn>;
export type ClipboardRecipe = ReturnType<ClipboardRecipeFn>;
export type ClipboardRecipeSlot = keyof ClipboardRecipe;
