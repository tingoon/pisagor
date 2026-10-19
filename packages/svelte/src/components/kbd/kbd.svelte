<script lang="ts">
  import type { KbdRootContract } from "@pisagor/contracts";
  import { kbdRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";

  type Props = HTMLAttributes<HTMLElement> & {
    children?: import("svelte").Snippet;
  } & KbdRootContract;

  let {
    variant = "default",
    size = "md",
    recipe = kbdRecipe,
    class: className,
    children,
    ...rest
  }: Props = $props();
</script>

<kbd
  {...rest}
  class={recipe({ class: cn(className), size, variant })}
  data-part="root"
  data-scope="kbd"
>
  {@render children?.()}
</kbd>
