<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { VisuallyHiddenProps as BaseVisuallyHiddenProps } from "@pisagor/props";
import { visuallyHiddenRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = HTMLAttributes<HTMLElement> & {
  children?: import("svelte").Snippet;
} & BaseVisuallyHiddenProps;

let {
  recipe = visuallyHiddenRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();
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
