import { tv, type VariantProps } from "tailwind-variants";

export const segmentGroupRecipe = tv({
  defaultVariants: {
    /** Size scale. */
    size: "md",
  },
  slots: {
    base: [
      "group/segment-group relative",
      "isolate inline-flex items-center gap-0.5",
      "bg-muted rounded-xl p-1.5",
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
      "bg-card rounded-lg shadow-sm",
      "duration-normal ease-emphasized transition-all",
      "[transition-property:var(--transition-property,width,height,left,top)]",
      "group-data-[variant=underline]/segment-group:bg-primary group-data-[variant=underline]/segment-group:rounded-none group-data-[variant=underline]/segment-group:shadow-none",
      "data-[orientation=horizontal]:group-data-[variant=underline]/segment-group:top-[calc(var(--top)+var(--height)-1px)]",
      "data-[orientation=vertical]:group-data-[variant=underline]/segment-group:left-[calc(var(--left)+var(--width)-1px)]",
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
      "text-sm font-medium whitespace-nowrap",
      "cursor-pointer",
      "data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start",
      "rounded-lg border border-transparent",
      "text-muted-foreground duration-fast transition-colors ease-out",
      "hover:text-foreground/72",
      "data-[state=checked]:text-foreground",
      "data-focus-visible:border-primary data-focus-visible:ring-0.75 data-focus-visible:ring-ring/24 outline-hidden",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
      "[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      "motion-reduce:transition-none!",
    ],
    itemText: ["relative z-1"],
  },
  variants: {
    size: {
      lg: {
        base: "p-2",
        item: "h-10 px-4 text-base",
      },
      md: {},
      sm: {
        base: "p-1",
        item: "h-7 px-2.5 text-xs",
      },
    },
  },
});

export type SegmentGroupRecipeFn = typeof segmentGroupRecipe;
export type SegmentGroupRecipe = ReturnType<SegmentGroupRecipeFn>;
export type SegmentGroupRecipeSlot = keyof SegmentGroupRecipe;
export type SegmentGroupVariantProps = VariantProps<SegmentGroupRecipeFn>;
