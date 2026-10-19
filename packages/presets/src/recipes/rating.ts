import { tv, type VariantProps } from "tailwind-variants";

export const ratingRecipe = tv({
  defaultVariants: {
    /** Size scale. */
    size: "md",
    /** Visual emphasis. */
    variant: "primary",
  },
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
      "duration-fast transition-transform ease-out",
      "active:scale-97",
      "not-[[data-disabled],[data-readonly]]:cursor-pointer",
      "data-disabled:opacity-64 data-disabled:grayscale",
      "not-data-readonly:focus-visible:ring-0.75 focus-visible:ring-offset-background outline-hidden focus-visible:ring-current focus-visible:ring-offset-1",
      "motion-reduce:transition-none! motion-reduce:active:scale-100",
    ],
  },
  variants: {
    size: {
      lg: {
        base: "**:data-[scope=rating]:data-[part=item-indicator]:size-8",
      },
      md: {},
      sm: {
        base: "**:data-[scope=rating]:data-[part=item-indicator]:size-4",
      },
    },
    variant: {
      primary: {},
      secondary: {
        base: "opacity-90",
      },
    },
  },
});

export type RatingRecipeFn = typeof ratingRecipe;
export type RatingRecipe = ReturnType<RatingRecipeFn>;
export type RatingRecipeSlot = keyof RatingRecipe;
export type RatingVariantProps = VariantProps<RatingRecipeFn>;
