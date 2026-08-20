import { tv, type VariantProps } from "tailwind-variants";

export const dialogBackdropVariants = tv({
  base: [
    "fixed inset-0 z-50",
    "bg-black/32 backdrop-blur-xs",
    "duration-200",
    "peer peer-[[data-scope=dialog][data-part=backdrop]]:hidden",
    "data-[state=open]:fade-in-0 data-[state=open]:animate-in",
    "data-[state=closed]:fade-out-0 data-[state=closed]:animate-out",
    "motion-reduce:animate-none!",
  ],
});

export const dialogContentVariants = tv({
  base: [
    "[--space:--spacing(6)]",
    "z-[calc(50+var(--layer-index,0))]",
    "relative",
    "row-start-2",
    "max-h-full min-h-0 w-full min-w-0",
    "flex flex-col",
    "bg-popover",
    "text-popover-foreground",
    "rounded-2xl border shadow-lg/5",
    "outline-hidden",
    "translate-y-[calc(-1.25rem*var(--nested-layer-count))]",
    "transition-[scale,opacity,translate] duration-200 ease-in-out will-change-transform",
    "data-[nested=dialog]:data-[state=closed]:slide-in-from-bottom-10 data-[nested=dialog]:data-[state=open]:slide-in-from-bottom-10 data-[has-nested=dialog]:origin-top",
    "scale-[calc(1-0.1*var(--nested-layer-count))] opacity-[calc(1-0.1*var(--nested-layer-count))]",
    "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-[98%] data-[state=closed]:animate-out",
    "data-[state=open]:fade-in-0 data-[state=open]:zoom-in-[98%] data-[state=open]:animate-in",
    "motion-reduce:animate-none! motion-reduce:transition-none!",
  ],
  defaultVariants: {
    size: "md",
  },
  variants: {
    bottomStickOnMobile: {
      true: [
        "max-sm:max-w-none",
        "max-sm:rounded-none max-sm:rounded-t-2xl max-sm:border-x-0 max-sm:border-t max-sm:border-b-0",
        "max-sm:opacity-[calc(1-min(var(--nested-dialogs),1))]",
        "max-sm:data-[state=closed]:slide-out-to-bottom-5 max-sm:data-[state=open]:slide-in-from-bottom-5",
        "max-sm:data-[state=closed]:zoom-out-100 max-sm:data-[state=open]:zoom-in-100",
      ],
    },
    size: {
      "2xl": ["max-w-3xl"],
      "3xl": ["max-w-4xl"],
      "4xl": ["max-w-5xl"],
      "5xl": ["max-w-6xl"],
      "6xl": ["max-w-7xl"],
      fullscreen: ["size-full"],
      lg: ["max-w-xl"],
      md: ["max-w-lg"],
      sm: ["max-w-md"],
      xl: ["max-w-2xl"],
    },
  },
});

export const dialogPositionerVariants = tv({
  base: [
    "fixed inset-0 z-50",
    "h-svh w-screen",
    "grid grid-rows-[1fr_auto_3fr] justify-items-center",
    "p-4",
  ],
  variants: {
    bottomStickOnMobile: {
      true: "max-sm:grid-rows-[1fr_auto] max-sm:p-0 max-sm:pt-12",
    },
  },
});

export const dialogBodyVariants = tv({
  base: [
    "flex-1",
    "p-(--space)",
    "overflow-auto",
    "in-[[data-scope=dialog][data-part=content]:has([data-scope=dialog][data-part=header])]:pt-0",
    "in-[[data-scope=dialog][data-part=content]:has([data-scope=dialog][data-part=footer]:not(.border-t))]:pb-1",
  ],
});

export const dialogHeaderVariants = tv({
  base: [
    "p-(--space)",
    "flex flex-col gap-2",
    "in-[[data-scope=dialog][data-part=content]:has([data-scope=dialog][data-part=body])]:pb-3",
  ],
});

export const dialogTitleVariants = tv({
  base: ["font-heading font-semibold text-lg leading-none"],
});

export const dialogDescriptionVariants = tv({
  base: ["text-muted-foreground text-sm"],
});

export const dialogFooterVariants = tv({
  base: [
    "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
    "sm:rounded-b-[calc(var(--radius-2xl)-1px)]",
    "px-(--space) py-4",
    "bg-muted/48",
    "border-t",
  ],
});

export const dialogInlineVariants = tv({
  base: ["absolute inset-e-2 top-2 opacity-64 hover:opacity-100"],
});

export type DialogBackdropVariantProps = VariantProps<typeof dialogBackdropVariants>;
export type DialogBackdropVariants = ReturnType<typeof dialogBackdropVariants>;

export type DialogContentVariantProps = VariantProps<typeof dialogContentVariants>;
export type DialogContentVariants = ReturnType<typeof dialogContentVariants>;

export type DialogPositionerVariantProps = VariantProps<typeof dialogPositionerVariants>;
export type DialogPositionerVariants = ReturnType<typeof dialogPositionerVariants>;

export type DialogBodyVariantProps = VariantProps<typeof dialogBodyVariants>;
export type DialogBodyVariants = ReturnType<typeof dialogBodyVariants>;

export type DialogHeaderVariantProps = VariantProps<typeof dialogHeaderVariants>;
export type DialogHeaderVariants = ReturnType<typeof dialogHeaderVariants>;

export type DialogTitleVariantProps = VariantProps<typeof dialogTitleVariants>;
export type DialogTitleVariants = ReturnType<typeof dialogTitleVariants>;

export type DialogDescriptionVariantProps = VariantProps<typeof dialogDescriptionVariants>;
export type DialogDescriptionVariants = ReturnType<typeof dialogDescriptionVariants>;

export type DialogFooterVariantProps = VariantProps<typeof dialogFooterVariants>;
export type DialogFooterVariants = ReturnType<typeof dialogFooterVariants>;

export type DialogInlineVariantProps = VariantProps<typeof dialogInlineVariants>;
export type DialogInlineVariants = ReturnType<typeof dialogInlineVariants>;
