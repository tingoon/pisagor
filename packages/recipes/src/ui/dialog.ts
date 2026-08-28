import { tv, type VariantProps } from "tailwind-variants";

export const dialogVariants = tv({
  defaultVariants: {
    size: "md",
  },
  slots: {
    alertBody:
      "in-[[data-scope=dialog][data-part=content]:has([data-scope=alert-dialog][data-part=header])]:pt-0",
    backdrop: [
      "fixed inset-0 z-modal",
      "bg-black/32 backdrop-blur-xs",
      "duration-200",
      "peer peer-[[data-scope=dialog][data-part=backdrop]]:hidden",
      "data-[state=open]:fade-in-0 data-[state=open]:animate-in",
      "data-[state=closed]:fade-out-0 data-[state=closed]:animate-out",
      "motion-reduce:animate-none!",
    ],
    body: [
      "flex-1",
      "p-(--space)",
      "overflow-auto",
      "in-[[data-scope=dialog][data-part=content]:has([data-scope=dialog][data-part=header])]:pt-0",
      "in-[[data-scope=dialog][data-part=content]:has([data-scope=dialog][data-part=footer]:not(.border-t))]:pb-1",
    ],
    content: [
      "[--space:--spacing(6)]",
      "z-[calc(var(--z-modal)+var(--layer-index,0))]",
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
    description: ["text-muted-foreground text-sm"],
    footer: [
      "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
      "sm:rounded-b-[calc(var(--radius-2xl)-1px)]",
      "px-(--space) py-4",
      "bg-muted/48",
      "border-t",
    ],
    header: [
      "p-(--space)",
      "flex flex-col gap-2",
      "in-[[data-scope=dialog][data-part=content]:has([data-scope=dialog][data-part=body])]:pb-3",
    ],
    inline: ["absolute inset-e-2 top-2 opacity-64 hover:opacity-100"],
    positioner: [
      "fixed inset-0 z-modal",
      "h-svh w-screen",
      "grid grid-rows-[1fr_auto_3fr] justify-items-center",
      "p-4",
    ],
    title: ["font-heading font-semibold text-lg leading-none"],
  },
  variants: {
    bottomStickOnMobile: {
      true: {
        content: [
          "max-sm:max-w-none",
          "max-sm:rounded-none max-sm:rounded-t-2xl max-sm:border-x-0 max-sm:border-t max-sm:border-b-0",
          "max-sm:opacity-[calc(1-min(var(--nested-dialogs),1))]",
          "max-sm:data-[state=closed]:slide-out-to-bottom-5 max-sm:data-[state=open]:slide-in-from-bottom-5",
          "max-sm:data-[state=closed]:zoom-out-100 max-sm:data-[state=open]:zoom-in-100",
        ],
        positioner: "max-sm:grid-rows-[1fr_auto] max-sm:p-0 max-sm:pt-12",
      },
    },
    size: {
      "2xl": {
        content: ["max-w-3xl"],
      },
      "3xl": {
        content: ["max-w-4xl"],
      },
      "4xl": {
        content: ["max-w-5xl"],
      },
      "5xl": {
        content: ["max-w-6xl"],
      },
      "6xl": {
        content: ["max-w-7xl"],
      },
      fullscreen: {
        content: ["size-full"],
      },
      lg: {
        content: ["max-w-xl"],
      },
      md: {
        content: ["max-w-lg"],
      },
      sm: {
        content: ["max-w-md"],
      },
      xl: {
        content: ["max-w-2xl"],
      },
    },
  },
});

export type DialogVariantProps = VariantProps<typeof dialogVariants>;
export type DialogVariants = ReturnType<typeof dialogVariants>;
export type DialogSlots = keyof DialogVariants;
