import { tv, type VariantProps } from "tailwind-variants";

export const popoverContentVariants = tv({
  base: [
    "relative",
    "z-[calc(50+var(--layer-index,0))]",
    "[--space:--spacing(4)]",
    "w-auto min-w-32",
    "flex flex-col",
    "bg-popover",
    "text-popover-foreground",
    "rounded-xl border shadow-lg/5",
    "outline-hidden",
    "origin-(--transform-origin)",
    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    "data-[state=closed]:zoom-out-[98%] data-[state=open]:zoom-in-[98%]",
    "data-[state=closed]:animate-out data-[state=open]:animate-in",
    "data-[placement=bottom]:slide-in-from-top-2",
    "data-[placement=left]:slide-in-from-end-2",
    "data-[placement=right]:slide-in-from-start-2",
    "data-[placement=top]:slide-in-from-bottom-2",
    "motion-reduce:animate-none!",
  ],
});

export const popoverHeaderVariants = tv({
  base: [
    "flex flex-col gap-2 p-(--space)",
    "in-[[data-scope=popover][data-part=content]:has([data-scope=popover][data-part=body])]:pb-3",
  ],
});

export const popoverTitleVariants = tv({
  base: ["font-semibold text-base leading-none"],
});

export const popoverDescriptionVariants = tv({
  base: ["text-muted-foreground text-sm"],
});

export const popoverBodyVariants = tv({
  base: [
    "flex-1",
    "p-(--space)",
    "overflow-auto",
    "in-[[data-scope=popover][data-part=content]:has([data-scope=popover][data-part=header])]:pt-1",
    "in-[[data-scope=popover][data-part=content]:has([data-scope=popover][data-part=footer]:not(.border-t))]:pb-1",
  ],
});

export const popoverFooterVariants = tv({
  base: [
    "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
    "sm:rounded-b-[calc(var(--radius-lg)-1px)]",
    "px-(--space) py-4",
    "bg-muted/64",
    "border-t",
  ],
});

export const popoverInlineVariants = tv({
  base: ["absolute inset-e-2 top-2 opacity-64 hover:opacity-100"],
});

export const popoverInline2Variants = tv({
  base: ["border-s border-t"],
});
export type PopoverContentVariantProps = VariantProps<typeof popoverContentVariants>;
export type PopoverHeaderVariantProps = VariantProps<typeof popoverHeaderVariants>;
export type PopoverTitleVariantProps = VariantProps<typeof popoverTitleVariants>;
export type PopoverDescriptionVariantProps = VariantProps<typeof popoverDescriptionVariants>;
export type PopoverBodyVariantProps = VariantProps<typeof popoverBodyVariants>;
export type PopoverFooterVariantProps = VariantProps<typeof popoverFooterVariants>;
export type PopoverInlineVariantProps = VariantProps<typeof popoverInlineVariants>;
export type PopoverInline2VariantProps = VariantProps<typeof popoverInline2Variants>;
