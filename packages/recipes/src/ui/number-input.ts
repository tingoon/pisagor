import { tv, type VariantProps } from "tailwind-variants";

export const numberInputRecipe = tv({
  slots: {
    base: [
      "group/number-field flex w-full flex-col items-start gap-2",
      "has-[[data-scope=number-input][data-part=increment-trigger]]:has-[[data-scope=number-input][data-part=decrement-trigger]]:**:data-[scope=number-input]:data-[part=input]:text-center",
    ],
    clearTrigger: ["relative order-last me-1 shrink-0"],
    control: [
      "relative",
      "flex w-full justify-between",
      "text-base",
      "ring-ring/32",
      "transition-shadow",
      "focus-within:border-primary focus-within:ring-[3px] focus-within:ring-ring/32",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
      "aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/24",
      "dark:aria-invalid:border-destructive-foreground dark:aria-invalid:text-destructive-foreground dark:aria-invalid:ring-destructive-foreground/20",
      "motion-reduce:transition-none!",
    ],
    decrementTrigger: [
      "relative",
      "h-8 in-data-[size=lg]:h-9 in-data-[size=sm]:h-7",
      "flex shrink-0",
      "text-foreground",
      "rounded-none rounded-s-[calc(var(--radius-lg)+1px)]",
      "cursor-pointer",
      "pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11",
    ],
    incrementTrigger: [
      "relative",
      "h-8 in-data-[size=lg]:h-9 in-data-[size=sm]:h-7",
      "flex shrink-0",
      "text-foreground",
      "rounded-none rounded-e-[calc(var(--radius-lg)+1px)]",
      "cursor-pointer",
      "pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11",
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
});

export type NumberInputVariantProps = VariantProps<typeof numberInputRecipe>;
export type NumberInputSlots = ReturnType<typeof numberInputRecipe>;
