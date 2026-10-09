<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import type { StatusProps as BaseStatusProps } from "@pisagor/props";
import { statusRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { HTMLAttributes } from "svelte/elements";

type Props = HTMLAttributes<HTMLElement> & {
  children?: import("svelte").Snippet;
} & BaseStatusProps;

let {
  recipe = statusRecipe,
  class: className,
  children,
  size,
  variant,
  ...rest
}: Props = $props();
</script>

<Ark
  as="span"
  {...rest}
  class={recipe({ class: cn(className), size, variant })}
  data-part="indicator"
  data-scope="status"
  data-size={size}
>
  {@render children?.()}
</Ark>
