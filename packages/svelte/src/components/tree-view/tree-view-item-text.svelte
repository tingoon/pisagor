<script lang="ts">
  import {
    TreeView as TreeViewPrimitive,
    type TreeViewItemTextProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useTreeViewItemSlots } from "./tree-view.context";

  /** Item text; styled by the item recipe `title` slot. */
  let { children, class: className, ...rest }: TreeViewItemTextProps = $props();
  const item = useTreeViewItemSlots();
</script>

<TreeViewPrimitive.ItemText {...rest} class={cn(item.slots.title(), className)}>
  {@render children?.()}
</TreeViewPrimitive.ItemText>
