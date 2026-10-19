<script lang="ts">
  import {
    TreeView as TreeViewPrimitive,
    type TreeViewNodeRenameInputProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useTreeViewItemSlots } from "./tree-view.context";

  /** Rename input; styled by the item recipe `renameInput` slot. */
  let { class: className, ...rest }: TreeViewNodeRenameInputProps = $props();
  const item = useTreeViewItemSlots();
</script>

<TreeViewPrimitive.NodeRenameInput
  {...rest}
  class={cn(item.slots.renameInput(), className)}
/>
