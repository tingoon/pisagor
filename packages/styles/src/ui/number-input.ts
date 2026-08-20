import { tv, type VariantProps } from "tailwind-variants";

export const numberFieldVariants = tv({
  base: [
    "group/number-field flex w-full flex-col items-start gap-2",
    "has-[[data-scope=number-input][data-part=increment-trigger]]:has-[[data-scope=number-input][data-part=decrement-trigger]]:**:data-[scope=number-input]:data-[part=input]:text-center",
  ],
});

export const numberFieldGroupVariants = tv({
  base: [
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
});

export const numberFieldDecrementVariants = tv({
  base: [
    "relative",
    "h-8 in-data-[size=lg]:h-9 in-data-[size=sm]:h-7",
    "flex shrink-0",
    "text-foreground",
    "rounded-none rounded-s-[calc(var(--radius-lg)+1px)]",
    "cursor-pointer",
    "pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11",
  ],
});

export const numberFieldIncrementVariants = tv({
  base: [
    "relative",
    "h-8 in-data-[size=lg]:h-9 in-data-[size=sm]:h-7",
    "flex shrink-0",
    "text-foreground",
    "rounded-none rounded-e-[calc(var(--radius-lg)+1px)]",
    "cursor-pointer",
    "pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11",
  ],
});

export const numberInputInlineVariants = tv({
  base: [
    "grow",
    "h-8 in-data-[size=lg]:h-9 in-data-[size=sm]:h-7",
    "tabular-nums",
    "border-0 shadow-none ring-0",
    "focus-visible:ring-0 aria-invalid:ring-0 data-invalid:ring-0",
    "dark:bg-transparent",
  ],
});

export const numberFieldScrubberVariants = tv({
  base: ["flex cursor-ew-resize"],
});

export const numberInputInline2Variants = tv({
  base: ["relative order-last me-1 shrink-0"],
});

export type NumberFieldVariantProps = VariantProps<typeof numberFieldVariants>;
export type NumberFieldVariants = ReturnType<typeof numberFieldVariants>;

export type NumberFieldGroupVariantProps = VariantProps<typeof numberFieldGroupVariants>;
export type NumberFieldGroupVariants = ReturnType<typeof numberFieldGroupVariants>;

export type NumberFieldDecrementVariantProps = VariantProps<typeof numberFieldDecrementVariants>;
export type NumberFieldDecrementVariants = ReturnType<typeof numberFieldDecrementVariants>;

export type NumberFieldIncrementVariantProps = VariantProps<typeof numberFieldIncrementVariants>;
export type NumberFieldIncrementVariants = ReturnType<typeof numberFieldIncrementVariants>;

export type NumberInputInlineVariantProps = VariantProps<typeof numberInputInlineVariants>;
export type NumberInputInlineVariants = ReturnType<typeof numberInputInlineVariants>;

export type NumberFieldScrubberVariantProps = VariantProps<typeof numberFieldScrubberVariants>;
export type NumberFieldScrubberVariants = ReturnType<typeof numberFieldScrubberVariants>;

export type NumberInputInline2VariantProps = VariantProps<typeof numberInputInline2Variants>;
export type NumberInputInline2Variants = ReturnType<typeof numberInputInline2Variants>;
