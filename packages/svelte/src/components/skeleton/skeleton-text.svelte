<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { SkeletonProps as BaseSkeletonProps } from "@pisagor/props";
import { skeletonRecipe } from "@pisagor/recipes";
import type { HTMLAttributes } from "svelte/elements";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  class?: string | undefined;
  lines?: number;
} & BaseSkeletonProps;

let {
  lines = 2,
  recipe = skeletonRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
</script>

<Ark
  as="div"
  {...rest}
  class={slots.text({ class: className })}
  data-part="text"
  data-scope="skeleton"
>
  {#each Array.from({ length: lines }) as _, index (index)}
    <div class={slots.line()}></div>
  {/each}
</Ark>
