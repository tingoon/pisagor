<script lang="ts">
  import type { Component } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "@pisagor/utils";
  import { useTreeViewItemSlots } from "./tree-view.context";

  type Props = HTMLAttributes<HTMLSpanElement> & {
    icon: Component | null | undefined;
  };

  /** Shorthand-only node icon (not exported as a part). */
  let { class: className, icon: Icon, ...rest }: Props = $props();
  const item = useTreeViewItemSlots();
</script>

{#if Icon}
  <span
    {...rest}
    class={cn(item.slots.icon(), className)}
    data-part="item-icon"
    data-scope="tree-view"
  >
    <Icon />
  </span>
{/if}
