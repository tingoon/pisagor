<script lang="ts">
  import type { VisuallyHiddenRootContract } from "@pisagor/contracts";
  import { visuallyHiddenRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";

  type Props = HTMLAttributes<HTMLElement> & {
    children?: import("svelte").Snippet;
  } & VisuallyHiddenRootContract;

  let {
    recipe = visuallyHiddenRecipe,
    class: className,
    children,
    ...rest
  }: Props = $props();
</script>

<span
  {...rest}
  class={recipe({ class: cn(className) })}
  data-part="root"
  data-scope="visually-hidden"
>
  {@render children?.()}
</span>
