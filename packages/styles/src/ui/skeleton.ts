import { tv, type VariantProps } from "tailwind-variants";

export const skeletonVariants = tv({
  base: ["rounded-md bg-muted", "animate-pulse", "motion-reduce:animate-none!"],
});

export const skeletonCircleVariants = tv({
  base: [
    "size-10",
    "shrink-0",
    "bg-muted",
    "rounded-full",
    "animate-pulse",
    "motion-reduce:animate-none!",
  ],
});

export const skeletonTextVariants = tv({
  base: [
    "w-full",
    "flex flex-col gap-2",
    "animate-pulse",
    "**:[div]:h-4",
    "motion-reduce:animate-none!",
  ],
});

export const skeletonInlineVariants = tv({
  base: ["w-full rounded-md bg-muted last:w-3/4"],
});
export type SkeletonVariantProps = VariantProps<typeof skeletonVariants>;
export type SkeletonCircleVariantProps = VariantProps<typeof skeletonCircleVariants>;
export type SkeletonTextVariantProps = VariantProps<typeof skeletonTextVariants>;
export type SkeletonInlineVariantProps = VariantProps<typeof skeletonInlineVariants>;
