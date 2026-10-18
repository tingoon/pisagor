<script lang="ts">
  import type { SkeletonProps as BaseSkeletonProps } from "@pisagor/props";
  import { skeletonRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";

  type Props = HTMLAttributes<HTMLDivElement> & {
    children?: import("svelte").Snippet;
  } & BaseSkeletonProps;

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
  class={slots.base({ class: cn(className) })}
  data-part="root"
  data-scope="skeleton"
>
  {@render children?.()}
</div>
