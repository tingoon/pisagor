<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { SkeletonProps as BaseSkeletonProps } from "@pisagor/props";
import { skeletonRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = HTMLAttributes<HTMLDivElement> & {
  children?: import("svelte").Snippet;
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
  class={slots.base({ class: cn(className) })}
  data-part="root"
  data-scope="skeleton"
>
  {@render children?.()}
</Ark>
