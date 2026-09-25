<script lang="ts">
import type { TreeViewItemProps } from "@ark-ui/svelte/tree-view";
import { TreeView as TreeViewPrimitive } from "@ark-ui/svelte/tree-view";
import { treeViewItemRecipe } from "@pisagor/recipes/tree-view";
import { cn } from "@pisagor/utils";
import { setTreeViewItemContext, useTreeView } from "./tree-view.context";

type Props = Omit<TreeViewItemProps, "class"> & {
  class?: string | undefined;
  itemRecipe?: typeof treeViewItemRecipe;
};

let { children, itemRecipe = treeViewItemRecipe, class: className, ...rest }: Props = $props();

const { slots } = useTreeView();
const itemSlots = $derived(itemRecipe());
setTreeViewItemContext({
  get slots() {
    return itemSlots;
  },
});
</script>

<TreeViewPrimitive.Item {...rest} class={slots.control({ class: cn(className) })}>
  {@render children?.()}
</TreeViewPrimitive.Item>
