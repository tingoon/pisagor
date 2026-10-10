<script lang="ts">
import { skeletonRecipe } from "@pisagor/recipes";
import { Skeleton } from "@pisagor/svelte";
import { tv } from "tailwind-variants";

const brandSkeletonRecipe = tv({
  extend: skeletonRecipe,
  slots: {
    circle: "bg-emerald-500/15",
    line: "bg-emerald-500/15",
  },
  variants: {},
});
</script>

<div class="flex items-center gap-2">
  <Skeleton.Circle class="size-16" recipe={brandSkeletonRecipe} />
  <Skeleton.Text lines={3} recipe={brandSkeletonRecipe} />
</div>
