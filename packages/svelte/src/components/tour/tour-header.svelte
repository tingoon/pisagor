<script lang="ts">
  import { dialogRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";

  let {
    children,
    class: className,
    ...rest
  }: HTMLAttributes<HTMLDivElement> = $props();
  const dialogSlots = $derived(dialogRecipe());
</script>

<div
  {...rest}
  class={dialogSlots.header({ class: cn(className) })}
  data-part="header"
  data-scope="tour"
>
  {@render children?.()}
</div>
