<script lang="ts">
import type { TreeViewNodeRenameInputProps } from "@ark-ui/svelte/tree-view";
import { TreeView as TreeViewPrimitive } from "@ark-ui/svelte/tree-view";
import { treeViewItemRecipe } from "@pisagor/recipes/tree-view";
import { cn } from "@pisagor/utils";
import { useTreeViewItem } from "./tree-view.context";

type Props = Omit<TreeViewNodeRenameInputProps, "class"> & { class?: string | undefined };
let { class: className, ...rest }: Props = $props();
const item = useTreeViewItem();
const slots = $derived(item?.slots ?? treeViewItemRecipe());
</script>

<TreeViewPrimitive.NodeRenameInput {...rest} class={slots.renameInput({ class: cn(className) })} />
