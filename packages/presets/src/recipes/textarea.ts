import { tv, type VariantProps } from "tailwind-variants";
import {
  formControlFillCompounds,
  formControlShellBase,
  formControlSurfaceVariantOptions,
} from "./form-control";

export const textareaRecipe = tv({
  compoundVariants: formControlFillCompounds({ slot: "rootLayout" }),
  defaultVariants: {
    /** Reserve end padding for the clear control. */
    clearable: false,
    /** Size scale. */
    size: "md",
    /** Surface variant. */
    surfaceVariant: undefined,
    /** Visual emphasis. */
    variant: "primary",
  },
  slots: {
    clearAddon: ["absolute inset-e-1.5 top-1.5 self-start p-0"],
    clearableRoot: [
      "field-sizing-content min-h-16 w-full flex-1",
      "px-3 py-2",
      "bg-transparent",
      "text-base md:text-sm",
      "resize-none rounded-none border-0 shadow-none",
      "placeholder:text-muted-foreground/64",
      "duration-fast transition ease-out",
      "outline-hidden focus-visible:ring-0",
      "disabled:bg-transparent aria-invalid:ring-0 data-invalid:ring-0",
      "dark:bg-transparent dark:disabled:bg-transparent",
      "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-64",
      "motion-reduce:transition-none!",
    ],
    group: ["relative", "h-auto", "items-start"],
    rootLayout: [
      ...formControlShellBase,
      "field-sizing-content min-h-16 w-full",
      "flex h-auto px-3 py-2",
    ],
  },
  variants: {
    clearable: {
      true: {
        clearableRoot: "pe-9",
      },
    },
    size: {
      lg: {
        clearableRoot: "min-h-20 px-4 py-3 text-base",
        rootLayout: "min-h-20 px-4 py-3",
      },
      md: {},
      sm: {
        clearableRoot: "min-h-12 px-2.5 py-1.5 text-sm",
        rootLayout: "min-h-12 px-2.5 py-1.5",
      },
    },
    surfaceVariant: formControlSurfaceVariantOptions,
    variant: {
      primary: {},
      secondary: {},
    },
  },
});

export type TextareaRecipeFn = typeof textareaRecipe;
export type TextareaVariantProps = VariantProps<TextareaRecipeFn>;
export type TextareaRecipe = ReturnType<TextareaRecipeFn>;
export type TextareaRecipeSlot = keyof TextareaRecipe;
