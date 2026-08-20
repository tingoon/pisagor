import { tv, type VariantProps } from "tailwind-variants";

export const timelineVariants = tv({
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

export const timelineItemVariants = tv({
  base: [
    "group/timeline-item",
    "relative flex gap-3",
    "group-data-[orientation=vertical]/timeline:pb-6 group-data-[orientation=vertical]/timeline:last:pb-0",
    "group-data-[orientation=horizontal]/timeline:flex-1 group-data-[orientation=horizontal]/timeline:flex-col",
  ],
});

export const timelineIndicatorVariants = tv({
  base: [
    "relative z-10 flex size-3 shrink-0 items-center justify-center",
    "mt-1.5",
    "rounded-full border-2 border-primary bg-background",
    "[&_svg:not([class*='size-'])]:size-3",
  ],
});

export const timelineSeparatorVariants = tv({
  base: [
    "pointer-events-none absolute bg-border",
    "group-data-[orientation=vertical]/timeline:inset-s-[5px] group-data-[orientation=vertical]/timeline:top-4 group-data-[orientation=vertical]/timeline:bottom-0 group-data-[orientation=vertical]/timeline:w-px",
    "group-data-[orientation=horizontal]/timeline:inset-s-3 group-data-[orientation=horizontal]/timeline:top-[7px] group-data-[orientation=horizontal]/timeline:end-0 group-data-[orientation=horizontal]/timeline:h-px",
    "group-last/timeline-item:hidden",
  ],
});

export const timelineContentVariants = tv({
  base: ["flex min-w-0 flex-1 flex-col gap-1"],
});

export const timelineTitleVariants = tv({
  base: ["font-medium text-foreground text-sm"],
});

export const timelineDescriptionVariants = tv({
  base: ["text-muted-foreground text-sm"],
});
export type TimelineVariantProps = VariantProps<typeof timelineVariants>;
export type TimelineItemVariantProps = VariantProps<typeof timelineItemVariants>;
export type TimelineIndicatorVariantProps = VariantProps<typeof timelineIndicatorVariants>;
export type TimelineSeparatorVariantProps = VariantProps<typeof timelineSeparatorVariants>;
export type TimelineContentVariantProps = VariantProps<typeof timelineContentVariants>;
export type TimelineTitleVariantProps = VariantProps<typeof timelineTitleVariants>;
export type TimelineDescriptionVariantProps = VariantProps<typeof timelineDescriptionVariants>;
