import { tv, type VariantProps } from "tailwind-variants";

export const toastRecipe = tv({
  base: [
    "w-[calc(100%-var(--viewport-offset-left))] sm:w-(--width)",
    "data-[align=center]:left-[calc(var(--viewport-offset-right)/2)]!",
    "sm:data-[align=center]:w-full",
  ],
});

export const toastItemRecipe = tv({
  slots: {
    actions: ["flex items-center gap-2"],
    base: [
      "z-(--z-index) translate-x-(--x) translate-y-(--y)",
      "relative",
      "w-[calc(100%-var(--viewport-offset-left))] sm:w-(--width)",
      "px-3.5 py-3",
      "flex items-start justify-between gap-1.5",
      "bg-popover",
      "select-none text-card-foreground text-sm",
      "rounded-lg border shadow-lg/5",
      "scale-(--scale) opacity-(--opacity)",
      "transition-all duration-normal will-change-[translate,opacity,scale]",
      "ease-emphasized",
      "data-[state=closed]:transition-[translate,scale,opacity]",
      "data-[state=closed]:duration-[300ms,300ms,150ms]",
      "data-[state=closed]:ease-out",
      "motion-reduce:transition-none!",
    ],
    body: ["flex flex-col gap-0.5"],
    close: ["opacity-64 hover:opacity-100"],
    content: ["flex items-start gap-1.5"],
    description: ["text-muted-foreground text-sm"],
    icon: [
      "in-data-[type=warning]:text-warning",
      "in-data-[type=success]:text-success",
      "in-data-[type=error]:text-destructive",
      "in-data-[type=info]:text-info",
      "[&_svg]:pointer-events-none [&_svg]:h-lh [&_svg]:w-4 [&_svg]:shrink-0",
    ],
    title: ["font-medium text-sm"],
  },
});

export type ToastVariantProps = VariantProps<typeof toastRecipe>;
export type ToastSlots = ReturnType<typeof toastRecipe>;

export type ToastItemVariantProps = VariantProps<typeof toastItemRecipe>;
export type ToastItemSlots = ReturnType<typeof toastItemRecipe>;
