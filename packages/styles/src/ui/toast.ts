import { tv, type VariantProps } from "tailwind-variants";

export const toasterVariants = tv({
  base: [
    "w-[calc(100%-var(--viewport-offset-left))] sm:w-(--width)",
    "data-[align=center]:left-[calc(var(--viewport-offset-right)/2)]!",
    "sm:data-[align=center]:w-full",
  ],
});

export const toastItemVariants = tv({
  slots: {
    actions: ["flex items-center gap-2"],
    body: ["flex flex-col gap-0.5"],
    content: ["flex items-start gap-1.5"],
    description: ["text-muted-foreground text-sm"],
    icon: [
      "in-data-[type=warning]:text-warning",
      "in-data-[type=success]:text-success",
      "in-data-[type=error]:text-destructive",
      "in-data-[type=info]:text-info",
      "[&_svg]:pointer-events-none [&_svg]:h-lh [&_svg]:w-4 [&_svg]:shrink-0",
    ],
    root: [
      "z-(--z-index) translate-x-(--x) translate-y-(--y)",
      "relative",
      "w-[calc(100%-var(--viewport-offset-left))] sm:w-(--width)",
      "px-3.5 py-3",
      "flex items-start justify-between gap-1.5",
      "bg-popover",
      "select-none text-card-foreground text-sm",
      "rounded-lg border shadow-lg/5",
      "scale-(--scale) opacity-(--opacity)",
      "transition-all duration-250 will-change-[translate,opacity,scale]",
      "ease-[cubic-bezier(0.21,1.02,0.73,1)]",
      "data-[state=closed]:transition-[translate,scale,opacity]",
      "data-[state=closed]:duration-[300ms,300ms,150ms]",
      "data-[state=closed]:ease-[cubic-bezier(0.06,0.71,0.55,1)]",
      "motion-reduce:transition-none!",
    ],
    title: ["font-medium text-sm"],
  },
});

export const toastInlineVariants = tv({
  base: ["opacity-64 hover:opacity-100"],
});
export type ToasterVariantProps = VariantProps<typeof toasterVariants>;
export type ToastItemVariantProps = VariantProps<typeof toastItemVariants>;
export type ToastInlineVariantProps = VariantProps<typeof toastInlineVariants>;
