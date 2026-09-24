<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { visuallyHiddenRecipe } from "@pisagor/recipes/visually-hidden";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = Omit<HTMLAttributes<HTMLElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  recipe?: typeof visuallyHiddenRecipe;
};

let { recipe = visuallyHiddenRecipe, class: className, children, ...rest }: Props = $props();
</script>

<Ark
  as="span"
  {...rest}
  class={recipe({ class: cn(className) })}
  data-part="root"
  data-scope="visually-hidden"
>
  {@render children?.()}
</Ark>
