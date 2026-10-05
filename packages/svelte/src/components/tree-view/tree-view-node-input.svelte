<script lang="ts">
import {
  type TreeViewNodeRenameInputProps,
  TreeView as TreeViewPrimitive,
} from "@ark-ui/svelte/tree-view";
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
