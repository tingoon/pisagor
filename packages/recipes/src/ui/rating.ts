import { tv, type VariantProps } from "tailwind-variants";

export const ratingVariants = tv({
  slots: {
    base: [
      "**:data-[scope=rating]:data-[part=item-indicator]:size-6",
      "text-warning",
      "data-readonly:pointer-events-none",
    ],
    control: ["inline-flex items-center gap-1"],
    indicator: [
      "relative inline-flex",
      "**:data-fg:text-current **:data-fg:[clip-path:inset(0_0_0_0)]",
      "[&[data-half]_[data-fg]]:[clip-path:inset(0_50%_0_0)]",
      "[&:not([data-highlighted])_[data-fg]]:[clip-path:inset(0_100%_0_0)]",
      "[&_svg]:absolute [&_svg]:inset-0 [&_svg]:size-full [&_svg]:text-current",
    ],
    item: [
      "inline-flex items-center justify-center",
      "rounded-md",
      "not-[[data-disabled],[data-readonly]]:cursor-pointer",
      "data-disabled:opacity-64 data-disabled:grayscale",
      "outline-hidden focus-visible:ring-current not-data-readonly:focus-visible:ring-[3px] focus-visible:ring-offset-1 focus-visible:ring-offset-background",
    ],
  },
});

export type RatingVariantProps = VariantProps<typeof ratingVariants>;
export type RatingVariants = ReturnType<typeof ratingVariants>;
export type RatingSlots = keyof RatingVariants;
