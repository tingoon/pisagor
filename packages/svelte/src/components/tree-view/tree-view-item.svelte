<script lang="ts">
import type { TreeViewItemProps } from "@ark-ui/svelte/tree-view";
import { TreeView as TreeViewPrimitive } from "@ark-ui/svelte/tree-view";
import type { TreeViewItemProps as TreeViewItemSharedProps } from "@pisagor/props";
import { treeViewItemRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { setTreeViewItemContext, useTreeView } from "./tree-view.context";

type Props = Omit<TreeViewItemProps, "class"> &
  {
  class?: string | undefined;
  } & TreeViewItemSharedProps;

let { children, recipe = treeViewItemRecipe, class: className, ...rest }: Props = $props();

const { slots } = useTreeView();
const itemSlots = $derived(recipe());
setTreeViewItemContext({
  get slots() {
    return itemSlots;
  },
});
</script>

<TreeViewPrimitive.Item {...rest} class={slots.control({ class: cn(className) })}>
  {@render children?.()}
</TreeViewPrimitive.Item>
