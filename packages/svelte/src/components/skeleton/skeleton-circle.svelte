<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { skeletonRecipe } from "@pisagor/recipes/skeleton";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = Omit<HTMLAttributes<HTMLDivElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  recipe?: typeof skeletonRecipe;
};

let { recipe = skeletonRecipe, class: className, children, ...rest }: Props = $props();

const slots = $derived(recipe());
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
