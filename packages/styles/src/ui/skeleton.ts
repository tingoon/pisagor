import { tv } from "tailwind-variants";

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
