import { tv, type VariantProps } from "tailwind-variants";

export const floatingPanelContentVariants = tv({
  base: [
    "[--space:--spacing(4)]",
    "group/floating-panel",
    "relative",
    "flex flex-col",
    "h-(--height) min-h-0 w-(--width)",
    "bg-popover",
    "text-popover-foreground",
    "rounded-2xl border shadow-lg/5",
    "transition-[scale,opacity,translate] duration-200 ease-in-out will-change-transform",
    "data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[98%] data-[state=open]:animate-in",
    "motion-reduce:animate-none! motion-reduce:transition-none!",
  ],
});

export const floatingPanelInlineVariants = tv({
  base: [
    "relative",
    "min-w-0",
    "px-(--space) py-[calc(var(--space)*0.5)]",
    "flex flex-1 shrink-0 items-center gap-2",
    "bg-muted/48",
    "rounded-t-2xl border-b",
    "overflow-hidden",
    "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
});

export const floatingPanelInline2Variants = tv({
  base: ["ms-auto flex items-center gap-2 rtl:me-auto"],
});

export const floatingPanelTitleVariants = tv({
  base: [
    "min-w-0 flex-1",
    "flex items-center gap-2",
    "truncate whitespace-nowrap font-medium text-sm leading-none",
  ],
});

export const floatingPanelBodyVariants = tv({
  base: [
    "flex flex-col gap-4",
    "p-(--space)",
    "overflow-auto",
    "in-[[data-scope=floating-panel][data-part=content]:has([data-scope=floating-panel][data-part=footer]:not(.border-t))]:pb-1",
  ],
});

export const floatingPanelFooterVariants = tv({
  base: [
    "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
    "sm:rounded-b-[calc(var(--radius-2xl)-1px)]",
    "px-(--space) py-4",
    "bg-muted/48",
    "border-t",
  ],
});

export const floatingPanelPositionerVariants = tv({
  base: ["inset-s-(--x) top-(--y) z-50"],
});

export const floatingPanelInline3Variants = tv({
  base: ["hidden group-data-maximized/floating-panel:block"],
});

export const floatingPanelInline4Variants = tv({
  base: ["hidden group-data-minimized/floating-panel:block"],
});
export type FloatingPanelContentVariantProps = VariantProps<typeof floatingPanelContentVariants>;
export type FloatingPanelInlineVariantProps = VariantProps<typeof floatingPanelInlineVariants>;
export type FloatingPanelInline2VariantProps = VariantProps<typeof floatingPanelInline2Variants>;
export type FloatingPanelTitleVariantProps = VariantProps<typeof floatingPanelTitleVariants>;
export type FloatingPanelBodyVariantProps = VariantProps<typeof floatingPanelBodyVariants>;
export type FloatingPanelFooterVariantProps = VariantProps<typeof floatingPanelFooterVariants>;
export type FloatingPanelPositionerVariantProps = VariantProps<
  typeof floatingPanelPositionerVariants
>;
export type FloatingPanelInline3VariantProps = VariantProps<typeof floatingPanelInline3Variants>;
export type FloatingPanelInline4VariantProps = VariantProps<typeof floatingPanelInline4Variants>;
