import { tv, type VariantProps } from "tailwind-variants";

export const datePickerTriggerVariants = tv({
  base: [
    "justify-start",
    "text-left data-placeholder-shown:[&>span]:text-muted-foreground",
    "active:scale-100",
    "[&_svg:not([class*='text-'])]:opacity-64",
  ],
});

export const datePickerInlineVariants = tv({
  base: [
    "[&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none",
  ],
});

export const datePickerContentVariants = tv({
  base: [
    "[--cell-size:--spacing(8)]",
    "z-[calc(50+var(--layer-index,0))]",
    "w-fit min-w-72",
    "p-3",
    "bg-popover",
    "text-popover-foreground",
    "rounded-xl border shadow-lg/5",
    "outline-hidden",
    "origin-(--transform-origin)",
    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    "data-[state=closed]:animate-out data-[state=open]:animate-in",
    "data-[state=closed]:zoom-out-[98%] data-[state=open]:zoom-in-[98%]",
    "motion-reduce:animate-none!",
  ],
});

export const datePickerValueVariants = tv({
  base: ["font-medium text-sm"],
});

export const datePickerControlVariants = tv({
  base: ["flex w-fit items-center gap-1"],
});

export const datePickerInline2Variants = tv({
  base: "text-muted-foreground",
});

export type DatePickerTriggerVariantProps = VariantProps<typeof datePickerTriggerVariants>;
export type DatePickerTriggerVariants = ReturnType<typeof datePickerTriggerVariants>;

export type DatePickerInlineVariantProps = VariantProps<typeof datePickerInlineVariants>;
export type DatePickerInlineVariants = ReturnType<typeof datePickerInlineVariants>;

export type DatePickerContentVariantProps = VariantProps<typeof datePickerContentVariants>;
export type DatePickerContentVariants = ReturnType<typeof datePickerContentVariants>;

export type DatePickerValueVariantProps = VariantProps<typeof datePickerValueVariants>;
export type DatePickerValueVariants = ReturnType<typeof datePickerValueVariants>;

export type DatePickerControlVariantProps = VariantProps<typeof datePickerControlVariants>;
export type DatePickerControlVariants = ReturnType<typeof datePickerControlVariants>;

export type DatePickerInline2VariantProps = VariantProps<typeof datePickerInline2Variants>;
export type DatePickerInline2Variants = ReturnType<typeof datePickerInline2Variants>;
