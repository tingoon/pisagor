import { tv, type VariantProps } from "tailwind-variants";

export const selectTriggerVariants = tv({
  base: [
    "w-fit",
    "flex items-center gap-2",
    "text-sm",
    "data-placeholder-shown:text-muted-foreground/64",
    "data-[state=open]:border-primary data-[state=open]:ring-[3px] data-[state=open]:ring-ring/32",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground",
  ],
});

export const selectSeparatorVariants = tv({
  base: ["pointer-events-none -mx-1 my-1 h-px bg-border"],
});

export const selectInlineVariants = tv({
  base: ["min-w-0", "flex items-center gap-2", "truncate text-nowrap"],
});

export const selectContentVariants = tv({
  base: [
    "z-50",
    "relative",
    "max-h-96 min-w-(--reference-width)",
    "p-1",
    "bg-popover",
    "text-popover-foreground",
    "rounded-xl border shadow-lg/5",
    "origin-(--transform-origin)",
    "outline-hidden",
    "overflow-y-auto",
    "duration-100",
    "data-[state=open]:animate-in",
    "data-[state=open]:fade-in-0",
    "data-[state=open]:zoom-in-[98%]",
    "data-[placement=bottom]:slide-in-from-top-2",
    "data-[placement=left]:slide-in-from-end-2",
    "data-[placement=right]:slide-in-from-start-2",
    "data-[placement=top]:slide-in-from-bottom-2",
    "motion-reduce:animate-none!",
  ],
});

export const selectGroupLabelVariants = tv({
  base: ["px-2 py-1.5", "font-semibold text-muted-foreground text-xs"],
});

export const selectItemVariants = tv({
  slots: {
    base: [
      "relative",
      "w-full",
      "py-1.5 ps-2 pe-8",
      "flex items-center gap-2",
      "select-none text-base md:text-sm",
      "rounded-md",
      "cursor-default",
      "outline-hidden",
      "in-[[data-scope=select][data-part=content]:has([data-scope=select][data-part=item-group-label])]:ps-4",
      "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
      "[&_svg]:pointer-events-none [&_svg]:shrink-0",
      "[&_svg:not([class*='size-'])]:size-4 [&_svg]:text-muted-foreground",
    ],
    indicator: ["absolute inset-e-2 flex size-4 items-center justify-center"],
    text: ["flex w-full flex-1 items-center gap-2"],
  },
});

export const selectClearTriggerVariants = tv({
  base: [
    "[&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground",
    "transition-opacity",
    "opacity-64",
    "outline-hidden focus-visible:opacity-100",
    "hover:opacity-100",
    "motion-reduce:transition-none!",
  ],
});

export const selectInline2Variants = tv({
  base: ["px-2 py-1.5", "text-center text-muted-foreground text-sm"],
});

export const selectInline3Variants = tv({
  base: ["ms-auto flex items-center gap-1 rtl:me-auto"],
});
export type SelectTriggerVariantProps = VariantProps<typeof selectTriggerVariants>;
export type SelectSeparatorVariantProps = VariantProps<typeof selectSeparatorVariants>;
export type SelectInlineVariantProps = VariantProps<typeof selectInlineVariants>;
export type SelectContentVariantProps = VariantProps<typeof selectContentVariants>;
export type SelectGroupLabelVariantProps = VariantProps<typeof selectGroupLabelVariants>;
export type SelectItemVariantProps = VariantProps<typeof selectItemVariants>;
export type SelectClearTriggerVariantProps = VariantProps<typeof selectClearTriggerVariants>;
export type SelectInline2VariantProps = VariantProps<typeof selectInline2Variants>;
export type SelectInline3VariantProps = VariantProps<typeof selectInline3Variants>;
