import { Skeleton } from "@pisagor/react";
import { skeletonRecipe } from "@pisagor/recipes";
import { tv } from "tailwind-variants";

const brandSkeletonRecipe = tv({
  extend: skeletonRecipe,
  slots: {
    circle: "bg-emerald-500/15",
    line: "bg-emerald-500/15",
  },
  variants: {},
});

export function CustomRecipe() {
  return (
    <div className="flex items-center gap-2">
      <Skeleton.Circle className="size-16" recipe={brandSkeletonRecipe} />
      <Skeleton.Text lines={3} recipe={brandSkeletonRecipe} />
    </div>
  );
}
