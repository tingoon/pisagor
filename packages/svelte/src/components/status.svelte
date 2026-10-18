<script lang="ts">
  import type { StatusRootContract } from "@pisagor/props";
  import { statusRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";

  type Props = HTMLAttributes<HTMLElement> & {
    children?: import("svelte").Snippet;
  } & StatusRootContract;

  let {
    recipe = statusRecipe,
    class: className,
    children,
    size,
    variant,
    ...rest
  }: Props = $props();
</script>

<span
  {...rest}
  class={recipe({ class: cn(className), size, variant })}
  data-part="indicator"
  data-scope="status"
  data-size={size}
>
  {@render children?.()}
</span>
