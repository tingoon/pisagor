import { tv } from "tailwind-variants";

export const segmentGroupRecipe = tv({
  slots: {
    base: [
      "group/segment-group relative",
      "inline-flex isolate items-center gap-0.5",
      "rounded-xl bg-muted p-1.5",
      "data-[orientation=vertical]:flex-col",
      "data-disabled:opacity-64",
      // Underline: drop the track chrome.
      "data-[variant=underline]:gap-1 data-[variant=underline]:rounded-none data-[variant=underline]:bg-transparent data-[variant=underline]:p-0",
      "data-[variant=underline]:border-input",
      "data-[orientation=horizontal]:data-[variant=underline]:border-b",
      "data-[orientation=vertical]:data-[variant=underline]:border-l",
    ],
    indicator: [
      "absolute top-(--top) left-(--left) z-0",
      "h-(--height) w-(--width)",
      "rounded-lg bg-card shadow-sm",
      "transition-[width,height,left,top,box-shadow] duration-normal ease-emphasized",
      "[transition-property:var(--transition-property,width,height,left,top)]",
      "group-data-[variant=underline]/segment-group:rounded-none group-data-[variant=underline]/segment-group:bg-primary group-data-[variant=underline]/segment-group:shadow-none",
      "data-[orientation=horizontal]:group-data-[variant=underline]/segment-group:top-[calc(var(--top)+var(--height)-1px)]",
      "data-[orientation=vertical]:group-data-[variant=underline]/segment-group:right-[calc(var(--left)+var(--width)-1px)]",
      "data-[orientation=vertical]:group-data-[variant=underline]/segment-group:-translate-x-px",
      "data-[orientation=horizontal]:group-data-[variant=underline]/segment-group:h-0.5",
      "data-[orientation=vertical]:group-data-[variant=underline]/segment-group:w-0.5",
      "motion-reduce:transition-none!",
    ],
    item: [
      "relative z-0",
      "inline-flex shrink-0 items-center justify-center gap-1.5",
      "h-8",
      "px-3",
      "whitespace-nowrap font-medium text-sm",
      "cursor-pointer",
      "data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start",
      "rounded-lg border border-transparent",
      "text-muted-foreground transition-[color,background-color] duration-fast ease-out",
      "hover:text-foreground/72",
      "data-[state=checked]:text-foreground",
      "outline-hidden data-focus-visible:border-primary data-focus-visible:ring-0.75 data-focus-visible:ring-ring/24",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
      "[&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
      "motion-reduce:transition-none!",
    ],
    itemText: ["relative z-1"],
  },
});

export type SegmentGroupRecipeFn = typeof segmentGroupRecipe;
export type SegmentGroupRecipe = ReturnType<SegmentGroupRecipeFn>;
export type SegmentGroupRecipeSlot = keyof SegmentGroupRecipe;
