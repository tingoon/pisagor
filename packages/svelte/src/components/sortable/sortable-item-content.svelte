<script lang="ts">
  import { cn } from "@pisagor/utils";
  import type { HTMLAttributes } from "svelte/elements";
  import { useSortableItem } from "./sortable.context";

  let {
    class: className,
    children,
    ...rest
  }: HTMLAttributes<HTMLDivElement> = $props();
  const { slots } = useSortableItem();
</script>

<div
  {...rest}
  class={slots.content({ class: cn(className) })}
  data-part="item-content"
  data-scope="sortable"
>
  {@render children?.()}
</div>
