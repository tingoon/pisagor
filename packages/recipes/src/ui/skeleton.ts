import { tv, type VariantProps } from "tailwind-variants";

export const skeletonRecipe = tv({
  slots: {
    base: ["rounded-md bg-muted", "animate-pulse", "motion-reduce:animate-none!"],
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
});

export type SkeletonVariantProps = VariantProps<typeof skeletonRecipe>;
export type SkeletonSlots = ReturnType<typeof skeletonRecipe>;
