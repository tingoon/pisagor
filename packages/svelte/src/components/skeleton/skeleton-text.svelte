<script lang="ts">
  import { Ark } from "@ark-ui/svelte";
  import type { SkeletonProps as BaseSkeletonProps } from "@pisagor/props";
  import { skeletonRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";

  type Props = HTMLAttributes<HTMLDivElement> & {
    lines?: number;
  } & BaseSkeletonProps;

  let {
    lines = 2,
    size = "md",
    recipe = skeletonRecipe,
    class: className,
    ...rest
  }: Props = $props();

  const slots = $derived(recipe({ size }));
</script>

<Ark
  as="div"
  {...rest}
  class={slots.text({ class: cn(className) })}
  data-part="text"
  data-scope="skeleton"
>
  {#each Array.from({ length: lines }) as _, index (index)}
    <div class={slots.line()}></div>
  {/each}
</Ark>
