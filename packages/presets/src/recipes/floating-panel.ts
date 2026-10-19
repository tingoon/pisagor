import { tv } from "tailwind-variants";

export const floatingPanelRecipe = tv({
  slots: {
    base: [],
    body: [
      "flex flex-col gap-4",
      "p-(--space)",
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
      "border-border/50 rounded-2xl border shadow-md",
      "duration-slow ease-emphasized transition will-change-transform",
      "data-[state=open]:fade-in-0 data-[state=open]:zoom-in-98 data-[state=open]:animate-in",
      "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-98 data-[state=closed]:animate-out",
      "motion-reduce:animate-none! motion-reduce:transition-none!",
    ],
    closeTrigger: [],
    control: ["ms-auto flex items-center gap-2 rtl:me-auto"],
    dragTrigger: [],
    footer: [
      "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
      "sm:rounded-b-2xl",
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
      "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    ],
    maximizedIcon: ["hidden group-data-maximized/floating-panel:block"],
    minimizedIcon: ["hidden group-data-minimized/floating-panel:block"],
    positioner: ["z-popover inset-s-(--x) top-(--y)"],
    resizeTrigger: [],
    stageTrigger: [],
    title: [
      "min-w-0 flex-1",
      "flex items-center gap-2",
      "truncate text-sm leading-none font-medium tracking-tight whitespace-nowrap",
    ],
    trigger: [],
  },
});

export type FloatingPanelRecipeFn = typeof floatingPanelRecipe;
export type FloatingPanelRecipe = ReturnType<FloatingPanelRecipeFn>;
export type FloatingPanelRecipeSlot = keyof FloatingPanelRecipe;
