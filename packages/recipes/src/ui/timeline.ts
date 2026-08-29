import { tv, type VariantProps } from "tailwind-variants";

export const timelineRecipe = tv({
  base: ["group/timeline", "relative flex"],
  defaultVariants: {
    orientation: "vertical",
  },
  variants: {
    orientation: {
      horizontal: "flex-row items-start gap-6",
      vertical: "flex-col",
    },
  },
});

export const timelineItemRecipe = tv({
  slots: {
    base: [
      "group/timeline-item",
      "relative flex gap-3",
      "group-data-[orientation=vertical]/timeline:pb-6 group-data-[orientation=vertical]/timeline:last:pb-0",
      "group-data-[orientation=horizontal]/timeline:flex-1 group-data-[orientation=horizontal]/timeline:flex-col",
    ],
    content: ["flex min-w-0 flex-1 flex-col gap-1"],
    description: ["text-muted-foreground text-sm"],
    indicator: [
      "relative z-10 flex size-3 shrink-0 items-center justify-center",
      "mt-1.5",
      "rounded-full border-2 border-primary bg-background",
      "[&_svg:not([class*='size-'])]:size-3",
    ],
    separator: [
      "pointer-events-none absolute bg-border",
      "group-data-[orientation=vertical]/timeline:inset-s-[5px] group-data-[orientation=vertical]/timeline:top-4 group-data-[orientation=vertical]/timeline:bottom-0 group-data-[orientation=vertical]/timeline:w-px",
      "group-data-[orientation=horizontal]/timeline:inset-s-3 group-data-[orientation=horizontal]/timeline:top-[7px] group-data-[orientation=horizontal]/timeline:end-0 group-data-[orientation=horizontal]/timeline:h-px",
      "group-last/timeline-item:hidden",
    ],
    title: ["font-medium text-foreground text-sm"],
  },
});

export type TimelineVariantProps = VariantProps<typeof timelineRecipe>;
export type TimelineSlots = ReturnType<typeof timelineRecipe>;

export type TimelineItemVariantProps = VariantProps<typeof timelineItemRecipe>;
export type TimelineItemSlots = ReturnType<typeof timelineItemRecipe>;
