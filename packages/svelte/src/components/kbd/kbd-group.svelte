<script lang="ts">
  import type { KbdGroupRootContract } from "@pisagor/props";
  import { kbdGroupRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";

  type Props = HTMLAttributes<HTMLElement> & {
    children?: import("svelte").Snippet;
  } & KbdGroupRootContract;

  let {
    recipe = kbdGroupRecipe,
    class: className,
    children,
    ...rest
  }: Props = $props();
</script>

<div
  {...rest}
  class={recipe({ class: cn(className) })}
  data-part="group"
  data-scope="kbd"
>
  {@render children?.()}
</div>
