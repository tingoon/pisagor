<script lang="ts">
  import { dropdownMenuRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";

  let {
    children,
    class: className,
    ...rest
  }: HTMLAttributes<HTMLSpanElement> = $props();
</script>

<span
  {...rest}
  class={dropdownMenuRecipe().shortcut({ class: cn(className) })}
  data-part="shortcut"
  data-scope="context-menu">{@render children?.()}</span
>
