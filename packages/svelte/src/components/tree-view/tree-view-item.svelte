<script lang="ts">
  import {
    TreeView as TreeViewPrimitive,
    type TreeViewItemProps,
  } from "@ark-ui/svelte";
  import type { TreeViewItemRootContract } from "@pisagor/props";
  import { treeViewItemRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { setTreeViewItemContext, useTreeView } from "./tree-view.context";

  type Props = TreeViewItemProps & TreeViewItemRootContract;

  let {
    children,
    recipe = treeViewItemRecipe,
    class: className,
    ...rest
  }: Props = $props();

  const { slots } = useTreeView();
  const itemSlots = $derived(recipe());
  setTreeViewItemContext({
    get slots() {
      return itemSlots;
    },
  });
</script>

<TreeViewPrimitive.Item
  {...rest}
  class={slots.control({ class: cn(className) })}
>
  {@render children?.()}
</TreeViewPrimitive.Item>
