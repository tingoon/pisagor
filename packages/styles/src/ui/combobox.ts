import { tv, type VariantProps } from "tailwind-variants";

export const comboboxItemVariants = tv({
  defaultVariants: {
    showIndicator: true,
  },
  slots: {
    base: [
      "relative",
      "py-1.5 ps-2",
      "text-sm",
      "flex w-full items-center gap-2",
      "rounded-xl",
      "select-none",
      "cursor-default",
      "outline-hidden",
      "data-[=checked]:bg-accent data-[state=checked]:text-accent-foreground",
      "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
      "[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
    ],
    indicator: ["absolute inset-e-2 flex size-3.5 items-center justify-center"],
  },
  variants: {
    showIndicator: {
      false: { base: "pe-2" },
      true: { base: "pe-8" },
    },
  },
});

export const comboboxControlVariants = tv({
  base: ["group/combobox-control", "relative flex flex-wrap items-center gap-1"],
});

export const comboboxTriggerVariants = tv({
  base: ["absolute inset-e-1 inset-y-0"],
});

export const comboboxContentVariants = tv({
  base: [
    "relative z-50",
    "max-h-96 min-w-48",
    "origin-(--transform-origin)",
    "p-1",
    "bg-popover",
    "text-popover-foreground",
    "rounded-xl border shadow-lg/5",
    "overflow-y-auto",
    "outline-hidden",
    "data-[state=closed]:animate-out data-[state=open]:animate-in",
    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    "data-[state=open]:zoom-in-[98%] data-[state=closed]:zoom-out-[98%]",
    "data-[placement=top]:slide-in-from-bottom-2",
    "data-[placement=bottom]:slide-in-from-top-2",
    "data-[placement=right]:slide-in-from-start-2",
    "data-[placement=left]:slide-in-from-end-2",
    "motion-reduce:animate-none!",
  ],
});

export const comboboxGroupLabelVariants = tv({
  base: ["px-2 py-1.5 font-semibold text-muted-foreground text-xs"],
});

export const comboboxEmptyVariants = tv({
  base: ["px-2 py-1.5", "text-center text-muted-foreground text-sm"],
});

export const comboboxListVariants = tv({
  base: ["flex flex-col"],
});

export const comboboxInlineVariants = tv({
  base: "group-has-[[data-scope=combobox][data-part=clear-trigger]]/input-group:hidden",
});

export const comboboxInline2Variants = tv({
  base: "size-4",
});

export type ComboboxItemVariantProps = VariantProps<typeof comboboxItemVariants>;
export type ComboboxItemVariants = ReturnType<typeof comboboxItemVariants>;
export type ComboboxItemSlots = keyof ComboboxItemVariants;

export type ComboboxControlVariantProps = VariantProps<typeof comboboxControlVariants>;
export type ComboboxControlVariants = ReturnType<typeof comboboxControlVariants>;

export type ComboboxTriggerVariantProps = VariantProps<typeof comboboxTriggerVariants>;
export type ComboboxTriggerVariants = ReturnType<typeof comboboxTriggerVariants>;

export type ComboboxContentVariantProps = VariantProps<typeof comboboxContentVariants>;
export type ComboboxContentVariants = ReturnType<typeof comboboxContentVariants>;

export type ComboboxGroupLabelVariantProps = VariantProps<typeof comboboxGroupLabelVariants>;
export type ComboboxGroupLabelVariants = ReturnType<typeof comboboxGroupLabelVariants>;

export type ComboboxEmptyVariantProps = VariantProps<typeof comboboxEmptyVariants>;
export type ComboboxEmptyVariants = ReturnType<typeof comboboxEmptyVariants>;

export type ComboboxListVariantProps = VariantProps<typeof comboboxListVariants>;
export type ComboboxListVariants = ReturnType<typeof comboboxListVariants>;

export type ComboboxInlineVariantProps = VariantProps<typeof comboboxInlineVariants>;
export type ComboboxInlineVariants = ReturnType<typeof comboboxInlineVariants>;

export type ComboboxInline2VariantProps = VariantProps<typeof comboboxInline2Variants>;
export type ComboboxInline2Variants = ReturnType<typeof comboboxInline2Variants>;
