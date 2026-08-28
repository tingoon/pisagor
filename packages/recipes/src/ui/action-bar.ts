import { tv, type VariantProps } from "tailwind-variants";

export const actionBarVariants = tv({
  defaultVariants: {
    placement: "bottom",
  },
  slots: {
    body: ["flex items-center gap-1", "**:data-[scope=action-bar]:data-[part=separator]:h-2"],
    close: ["opacity-64 transition-opacity", "hover:opacity-100", "motion-reduce:transition-none!"],
    content: [
      "[--space:--spacing(2)]",
      "flex w-fit items-center gap-1",
      "rounded-xl border shadow-lg/5",
      "px-[calc(var(--space)+2px)] py-(--space)",
      "bg-popover",
      "text-popover-foreground",
      "pointer-events-auto",
    ],
    positioner: [
      "fixed inset-x-0 bottom-0 z-modal",
      "flex",
      "px-4 pb-[calc(var(--gutter)+env(safe-area-inset-bottom,0))]",
      "pointer-events-none",
      "data-[state=closed]:animate-out data-[state=open]:animate-in",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=open]:slide-in-from-bottom-2 data-[state=closed]:slide-out-to-bottom-2",
      "motion-reduce:animate-none!",
    ],
    separator: ["mx-1 h-1/2"],
    value: ["shrink-0 font-medium text-sm tabular-nums"],
  },
  variants: {
    placement: {
      bottom: {
        positioner: "justify-center",
      },
      "bottom-end": {
        positioner: "justify-end",
      },
      "bottom-start": {
        positioner: "justify-start",
      },
    },
  },
});

export type ActionBarVariantProps = VariantProps<typeof actionBarVariants>;
export type ActionBarVariants = ReturnType<typeof actionBarVariants>;
export type ActionBarSlots = keyof ActionBarVariants;
