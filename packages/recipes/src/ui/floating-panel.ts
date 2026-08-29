import { tv, type VariantProps } from "tailwind-variants";

export const floatingPanelRecipe = tv({
  slots: {
    body: [
      "flex flex-col gap-4",
      "p-(--space)",
      "overflow-auto",
      "in-[[data-scope=floating-panel][data-part=content]:has([data-scope=floating-panel][data-part=footer]:not(.border-t))]:pb-1",
    ],
    content: [
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
    control: ["ms-auto flex items-center gap-2 rtl:me-auto"],
    footer: [
      "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
      "sm:rounded-b-[calc(var(--radius-2xl)-1px)]",
      "px-(--space) py-4",
      "bg-muted/48",
      "border-t",
    ],
    header: [
      "relative",
      "min-w-0",
      "px-(--space) py-[calc(var(--space)*0.5)]",
      "flex flex-1 shrink-0 items-center gap-2",
      "bg-muted/48",
      "rounded-t-2xl border-b",
      "overflow-hidden",
      "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
    ],
    maximizedIcon: ["hidden group-data-maximized/floating-panel:block"],
    minimizedIcon: ["hidden group-data-minimized/floating-panel:block"],
    positioner: ["inset-s-(--x) top-(--y) z-popover"],
    title: [
      "min-w-0 flex-1",
      "flex items-center gap-2",
      "truncate whitespace-nowrap font-medium text-sm leading-none",
    ],
  },
});

export type FloatingPanelVariantProps = VariantProps<typeof floatingPanelRecipe>;
export type FloatingPanelSlots = ReturnType<typeof floatingPanelRecipe>;
