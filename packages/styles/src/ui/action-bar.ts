import { tv, type VariantProps } from "tailwind-variants";

export const actionBarPositionerVariants = tv({
  base: [
    "fixed inset-x-0 bottom-0 z-50",
    "flex",
    "px-4 pb-[calc(var(--gutter)+env(safe-area-inset-bottom,0))]",
    "pointer-events-none",
    "data-[state=closed]:animate-out data-[state=open]:animate-in",
    "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    "data-[state=open]:slide-in-from-bottom-2 data-[state=closed]:slide-out-to-bottom-2",
    "motion-reduce:animate-none!",
  ],
  defaultVariants: {
    placement: "bottom",
  },
  variants: {
    placement: {
      bottom: "justify-center",
      "bottom-end": "justify-end",
      "bottom-start": "justify-start",
    },
  },
});

export const actionBarContentVariants = tv({
  base: [
    "[--space:--spacing(2)]",
    "flex w-fit items-center gap-1",
    "rounded-xl border shadow-lg/5",
    "px-[calc(var(--space)+2px)] py-(--space)",
    "bg-popover",
    "text-popover-foreground",
    "pointer-events-auto",
  ],
});

export const actionBarSeparatorVariants = tv({
  base: ["mx-1 h-1/2"],
});

export const actionBarCloseVariants = tv({
  base: ["opacity-64 transition-opacity", "hover:opacity-100", "motion-reduce:transition-none!"],
});

export const actionBarValueVariants = tv({
  base: ["shrink-0 font-medium text-sm tabular-nums"],
});

export const actionBarInlineVariants = tv({
  base: ["flex items-center gap-1", "**:data-[scope=action-bar]:data-[part=separator]:h-2"],
});
export type ActionBarPositionerVariantProps = VariantProps<typeof actionBarPositionerVariants>;
export type ActionBarContentVariantProps = VariantProps<typeof actionBarContentVariants>;
export type ActionBarSeparatorVariantProps = VariantProps<typeof actionBarSeparatorVariants>;
export type ActionBarCloseVariantProps = VariantProps<typeof actionBarCloseVariants>;
export type ActionBarValueVariantProps = VariantProps<typeof actionBarValueVariants>;
export type ActionBarInlineVariantProps = VariantProps<typeof actionBarInlineVariants>;
