<script lang="ts">
  import { Ark } from "@ark-ui/svelte";
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

<Ark
  as="div"
  {...rest}
  class={slots.circle({ class: cn(className) })}
  data-part="circle"
  data-scope="skeleton"
>
  {@render children?.()}
</Ark>
