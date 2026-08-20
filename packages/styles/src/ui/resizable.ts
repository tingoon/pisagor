import { tv, type VariantProps } from "tailwind-variants";

export const resizableEdgeHandleVariants = tv({
  defaultVariants: {
    handlePosition: "center",
    placement: "start",
  },
  slots: {
    base: [
      "group/resize-handle absolute inset-y-0 z-30 flex w-1 flex-col touch-none items-center border-0 bg-transparent p-0",
      "opacity-0 transition-opacity hover:bg-accent/60 hover:opacity-100 active:bg-accent active:opacity-100",
      "focus-visible:bg-accent/60 focus-visible:opacity-100 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1",
      "after:absolute after:inset-y-0 after:-inset-s-2 after:-inset-e-2",
      "cursor-col-resize motion-reduce:transition-none!",
    ],
    grip: [
      "z-10 flex h-4 w-3 items-center justify-center rounded-xs border border-border bg-background text-muted-foreground transition-colors",
      "group-hover/resize-handle:border-accent group-hover/resize-handle:bg-accent group-hover/resize-handle:text-accent-foreground",
      "group-active/resize-handle:border-transparent group-active/resize-handle:bg-accent group-active/resize-handle:text-accent-foreground",
      "group-focus-visible/resize-handle:border-accent group-focus-visible/resize-handle:bg-accent group-focus-visible/resize-handle:text-accent-foreground",
    ],
    icon: "size-2.5",
  },
  variants: {
    handlePosition: {
      bottom: { base: "justify-end pb-2" },
      center: { base: "justify-center" },
      top: { base: "justify-start pt-2" },
    },
    placement: {
      end: { base: "inset-s-0" },
      start: { base: "inset-e-0" },
    },
  },
});

export const resizableVariants = tv({
  base: ["flex size-full min-h-0 min-w-0 data-[orientation=vertical]:flex-col"],
});

export const resizableResizeTriggerIndicatorVariants = tv({
  base: [
    "bg-border opacity-0 transition-[opacity,background-color] group-hover/resizable-resize-trigger:bg-accent/60 group-hover/resizable-resize-trigger:opacity-100 group-focus-visible/resizable-resize-trigger:bg-accent/60 group-focus-visible/resizable-resize-trigger:opacity-100 group-active/resizable-resize-trigger:bg-accent group-active/resizable-resize-trigger:opacity-100 motion-reduce:transition-none!",
    "group-data-[orientation=horizontal]/resizable-resize-trigger:h-full group-data-[orientation=horizontal]/resizable-resize-trigger:w-1",
    "group-data-[orientation=vertical]/resizable-resize-trigger:h-1 group-data-[orientation=vertical]/resizable-resize-trigger:w-full",
  ],
});

export const resizableResizeTriggerVariants = tv({
  slots: {
    base: [
      "group/resizable-resize-trigger relative shrink-0 bg-transparent transition-opacity",
      "opacity-0 hover:bg-accent/60 hover:opacity-100 active:bg-accent active:opacity-100",
      "focus-visible:bg-accent/60 focus-visible:opacity-100 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1",
      "flex w-1 items-center justify-center motion-reduce:transition-none!",
      "after:-translate-x-1/2 data-[orientation=vertical]:after:-translate-y-1/2",
      "after:absolute after:inset-s-1/2 after:inset-y-0 after:w-2",
      "data-[orientation=vertical]:h-1 data-[orientation=vertical]:w-full",
      "data-[orientation=vertical]:after:inset-s-0 data-[orientation=vertical]:after:h-2 data-[orientation=vertical]:after:w-full",
      "data-[orientation=vertical]:after:translate-x-0",
      "[&[data-orientation=vertical]>div]:rotate-90",
    ],
    handle: [
      "z-10 flex h-4 w-3 items-center justify-center rounded-xs border border-border bg-background text-muted-foreground transition-colors",
      "group-hover/resizable-resize-trigger:border-accent group-hover/resizable-resize-trigger:bg-accent group-hover/resizable-resize-trigger:text-accent-foreground",
      "group-active/resizable-resize-trigger:border-transparent group-active/resizable-resize-trigger:bg-accent group-active/resizable-resize-trigger:text-accent-foreground",
      "group-focus-visible/resizable-resize-trigger:border-accent group-focus-visible/resizable-resize-trigger:bg-accent group-focus-visible/resizable-resize-trigger:text-accent-foreground",
    ],
    icon: "size-2.5",
  },
});

export type ResizableEdgeHandleVariantProps = VariantProps<typeof resizableEdgeHandleVariants>;
export type ResizableEdgeHandleVariants = ReturnType<typeof resizableEdgeHandleVariants>;
export type ResizableEdgeHandleSlots = keyof ResizableEdgeHandleVariants;

export type ResizableVariantProps = VariantProps<typeof resizableVariants>;
export type ResizableVariants = ReturnType<typeof resizableVariants>;

export type ResizableResizeTriggerIndicatorVariantProps = VariantProps<
  typeof resizableResizeTriggerIndicatorVariants
>;
export type ResizableResizeTriggerIndicatorVariants = ReturnType<
  typeof resizableResizeTriggerIndicatorVariants
>;

export type ResizableResizeTriggerVariantProps = VariantProps<
  typeof resizableResizeTriggerVariants
>;
export type ResizableResizeTriggerVariants = ReturnType<typeof resizableResizeTriggerVariants>;
export type ResizableResizeTriggerSlots = keyof ResizableResizeTriggerVariants;
