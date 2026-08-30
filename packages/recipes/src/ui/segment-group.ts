import { tv, type VariantProps } from "tailwind-variants";

export const segmentGroupRecipe = tv({
  slots: {
    base: [
      "group/segment-group relative",
      "flex gap-2",
      "isolate",
      "data-[orientation=vertical]:flex-col",
      "data-disabled:opacity-64",
      "data-[variant=underline]:gap-1 data-[variant=underline]:border-input",
      "data-[orientation=horizontal]:data-[variant=underline]:border-b",
      "data-[orientation=vertical]:data-[variant=underline]:border-l",
    ],
    indicator: [
      "absolute top-(--top) left-(--left) z-0",
      "h-(--height) w-(--width)",
      "rounded-[inherit]",
      "bg-input",
      "transition-[width,height,left,top] duration-150 ease-out",
      "[transition-property:var(--transition-property,width,height,left,top)]",
      "group-data-[variant=underline]/segment-group:bg-primary",
      "data-[orientation=horizontal]:group-data-[variant=underline]/segment-group:top-[calc(var(--top)+var(--height)-1px)]",
      "data-[orientation=vertical]:group-data-[variant=underline]/segment-group:right-[calc(var(--left)+var(--width)-1px)]",
      "data-[orientation=vertical]:group-data-[variant=underline]/segment-group:-translate-x-px",
      "data-[orientation=horizontal]:group-data-[variant=underline]/segment-group:h-0.5",
      "data-[orientation=vertical]:group-data-[variant=underline]/segment-group:w-0.5",
      "motion-reduce:transition-none!",
    ],
    item: [
      "relative",
      "cursor-pointer",
      "data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start",
      "rounded-[inherit] border border-transparent",
      "outline-hidden data-focus-visible:border-primary data-focus-visible:ring-[3px] data-focus-visible:ring-ring/32",
      "data-disabled:pointer-events-none data-disabled:opacity-64",
    ],
    itemText: ["relative z-1"],
  },
});

export type SegmentGroupVariantProps = VariantProps<typeof segmentGroupRecipe>;
export type SegmentGroupRecipe = ReturnType<typeof segmentGroupRecipe>;
export type SegmentGroupRecipeSlot = keyof SegmentGroupRecipe;
