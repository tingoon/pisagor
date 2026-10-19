<script lang="ts">
  import type { SkeletonRootContract } from "@pisagor/contracts";
  import { skeletonRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: import("svelte").Snippet;
  } & SkeletonRootContract;

  let {
    size = "md",
    recipe = skeletonRecipe,
    class: className,
    children,
    ...rest
  }: Props = $props();

  const slots = $derived(recipe({ size }));
</script>

<div
  {...rest}
  class={slots.circle({ class: cn(className) })}
  data-part="circle"
  data-scope="skeleton"
>
  {@render children?.()}
</div>
