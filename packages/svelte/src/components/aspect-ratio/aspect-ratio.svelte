<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { aspectRatioRecipe } from "@pisagor/recipes/aspect-ratio";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = Omit<HTMLAttributes<HTMLElement>, "class"> & {
  children?: import("svelte").Snippet;
  class?: string | undefined;
  recipe?: typeof aspectRatioRecipe;
};

let { recipe = aspectRatioRecipe, class: className, children, ...rest }: Props = $props();
</script>

<Ark
  as="div"
  {...rest}
  class={recipe({ class: cn(className) })}
  data-part="root"
  data-scope="aspect-ratio"
>
  {@render children?.()}
</Ark>
