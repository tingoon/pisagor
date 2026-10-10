import { tv } from "tailwind-variants";

export const selectRecipe = tv({
  slots: {
    clearTrigger: [
      "[&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground",
      "transition-opacity",
      "opacity-64",
      "outline-hidden focus-visible:opacity-100",
      "hover:opacity-100",
      "motion-reduce:transition-none!",
    ],
    content: [
      "z-popover",
      "relative",
      "max-h-96 min-w-(--reference-width)",
      "p-1",
      "bg-popover",
      "text-popover-foreground",
      "rounded-2xl border border-border/50 shadow-md",
      "origin-(--transform-origin)",
      "outline-hidden",
      "overflow-y-auto",
      "duration-fast",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
      "data-[state=open]:zoom-in-[98%] data-[state=closed]:zoom-out-[98%]",
      "data-[placement=bottom]:slide-in-from-top-2 data-[state=closed]:data-[placement=bottom]:slide-out-to-top-2",
      "data-[placement=left]:slide-in-from-end-2 data-[state=closed]:data-[placement=left]:slide-out-to-end-2",
      "data-[placement=right]:slide-in-from-start-2 data-[state=closed]:data-[placement=right]:slide-out-to-start-2",
      "data-[placement=top]:slide-in-from-bottom-2 data-[state=closed]:data-[placement=top]:slide-out-to-bottom-2",
      "motion-reduce:animate-none!",
    ],
    empty: ["px-2 py-1.5", "text-center text-muted-foreground text-sm"],
    item: [
      "relative",
      "w-full",
      "py-1.5 ps-2 pe-8",
      "flex items-center gap-2",
      "select-none text-base md:text-sm",
      "rounded-[calc(var(--radius-2xl)-(--spacing(1)))]",
      "cursor-default",
      "outline-hidden",
      "in-[[data-scope=select][data-part=content]:has([data-scope=select][data-part=item-group-label])]:ps-4",
      "data-highlighted:bg-accent data-highlighted:text-accent-foreground",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
      "[&_svg]:pointer-events-none [&_svg]:shrink-0",
      "[&_svg:not([class*='size-'])]:size-4 [&_svg]:text-muted-foreground",
    ],
    itemGroupLabel: [
      "px-2 py-1.5",
      "font-semibold text-muted-foreground text-xs",
    ],
    itemIndicator: [
      "absolute inset-e-2 flex size-4 items-center justify-center",
    ],
    itemText: ["flex w-full flex-1 items-center gap-2"],
    separator: ["pointer-events-none -mx-1 my-1 h-px bg-border"],
    trigger: [
      "w-fit",
      "flex items-center gap-2",
      "text-sm",
      "data-placeholder-shown:text-muted-foreground/64",
      "data-[state=open]:border-primary data-[state=open]:ring-0.75 data-[state=open]:ring-ring/32",
      "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-muted-foreground",
    ],
    triggerActions: ["ms-auto flex items-center gap-1 rtl:me-auto"],
    valueText: ["min-w-0", "flex items-center gap-2", "truncate text-nowrap"],
  },
});

export type SelectRecipeFn = typeof selectRecipe;
export type SelectRecipe = ReturnType<SelectRecipeFn>;
export type SelectRecipeSlot = keyof SelectRecipe;
