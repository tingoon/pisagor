<script lang="ts">
  import {
    TreeView as TreeViewPrimitive,
    type TreeViewNodeRenameInputProps,
  } from "@ark-ui/svelte";
  import { treeViewItemRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { useTreeViewItem } from "./tree-view.context";

  let { class: className, ...rest }: TreeViewNodeRenameInputProps = $props();
  const item = useTreeViewItem();
  const slots = $derived(item?.slots ?? treeViewItemRecipe());
</script>

<TreeViewPrimitive.NodeRenameInput
  {...rest}
  class={slots.renameInput({ class: cn(className) })}
/>
