import { tv, type VariantProps } from "tailwind-variants";
import {
  formControlFillCompounds,
  formControlGroupShellBase,
  formControlSurfaceVariantOptions,
} from "./form-control";

export const numberInputRecipe = tv({
  compoundVariants: formControlFillCompounds({ slot: "control" }),
  defaultVariants: {
    /** Control size. */
    size: "md",
    /** Surface variant. */
    surfaceVariant: undefined,
    /** Visual emphasis. */
    variant: "primary",
  },
  slots: {
    base: [
      "group/number-field flex w-full flex-col items-start gap-2",
      "has-[[data-scope=number-input][data-part=increment-trigger]]:has-[[data-scope=number-input][data-part=decrement-trigger]]:**:data-[scope=number-input]:data-[part=input]:text-center",
    ],
    clearTrigger: ["relative order-last me-1 shrink-0"],
    control: [
      ...formControlGroupShellBase,
      "relative",
      "flex w-full justify-between",
      "text-base",
      "ring-ring/32",
      "transition-shadow",
      "focus-within:border-primary focus-within:ring-0.75 focus-within:ring-ring/32",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
      "aria-invalid:border-destructive aria-invalid:text-destructive aria-invalid:ring-0.75 aria-invalid:ring-destructive/24",
      "motion-reduce:transition-none!",
    ],
    decrementTrigger: [
      "relative",
      "h-8 in-data-[size=lg]:h-9 in-data-[size=sm]:h-7",
      "flex shrink-0",
      "text-foreground",
      "rounded-none rounded-s-lg",
      "cursor-pointer",
      "duration-fast transition-transform ease-out",
      "active:scale-97",
      "pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11",
      "motion-reduce:transition-none! motion-reduce:active:scale-100",
    ],
    incrementTrigger: [
      "relative",
      "h-8 in-data-[size=lg]:h-9 in-data-[size=sm]:h-7",
      "flex shrink-0",
      "text-foreground",
      "rounded-none rounded-e-lg",
      "cursor-pointer",
      "duration-fast transition-transform ease-out",
      "active:scale-97",
      "pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11",
      "motion-reduce:transition-none! motion-reduce:active:scale-100",
    ],
    input: [
      "grow",
      "h-8 in-data-[size=lg]:h-9 in-data-[size=sm]:h-7",
      "tabular-nums",
      "border-0 shadow-none ring-0",
      "focus-visible:ring-0 aria-invalid:ring-0 data-invalid:ring-0",
      "dark:bg-transparent",
    ],
    scrubber: ["flex cursor-ew-resize"],
  },
  variants: {
    size: {
      lg: { control: "h-9" },
      md: { control: "h-8" },
      sm: { control: "h-7" },
    },
    surfaceVariant: formControlSurfaceVariantOptions,
    variant: {
      primary: {},
      secondary: {},
    },
  },
});

export type NumberInputRecipeFn = typeof numberInputRecipe;
export type NumberInputRecipe = ReturnType<NumberInputRecipeFn>;
export type NumberInputRecipeSlot = keyof NumberInputRecipe;
export type NumberInputVariantProps = VariantProps<NumberInputRecipeFn>;
