import { tv, type VariantProps } from "tailwind-variants";

export const skeletonRecipe = tv({
  defaultVariants: {
    /**
     * Size scale.
     */
    size: "md",
  },
  slots: {
    base: [
      "rounded-md bg-muted",
      "animate-pulse",
      "motion-reduce:animate-none!",
    ],
    circle: [
      "size-10",
      "shrink-0",
      "bg-muted",
      "rounded-full",
      "animate-pulse",
      "motion-reduce:animate-none!",
    ],
    line: ["w-full rounded-md bg-muted last:w-3/4"],
    text: [
      "w-full",
      "flex flex-col gap-2",
      "animate-pulse",
      "**:[div]:h-4",
      "motion-reduce:animate-none!",
    ],
  },
  variants: {
    size: {
      lg: {
        circle: "size-12",
        text: "gap-3 **:[div]:h-5",
      },
      md: {},
      sm: {
        circle: "size-8",
        text: "gap-1.5 **:[div]:h-3",
      },
    },
  },
});

export type SkeletonRecipeFn = typeof skeletonRecipe;
export type SkeletonRecipe = ReturnType<SkeletonRecipeFn>;
export type SkeletonRecipeSlot = keyof SkeletonRecipe;
export type SkeletonVariantProps = VariantProps<SkeletonRecipeFn>;
