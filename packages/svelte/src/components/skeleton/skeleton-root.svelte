<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { SkeletonProps as BaseSkeletonProps } from "@pisagor/props";
import { skeletonRecipe } from "@pisagor/recipes";
import type { HTMLAttributes } from "svelte/elements";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
} & BaseSkeletonProps;

let {
  recipe = skeletonRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
</script>

<Ark
  as="div"
  {...rest}
  class={slots.base({ class: className })}
  data-part="root"
  data-scope="skeleton"
>
  {@render children?.()}
</Ark>
