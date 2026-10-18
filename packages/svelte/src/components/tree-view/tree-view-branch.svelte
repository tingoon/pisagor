<script lang="ts">
  import {
    TreeView as TreeViewPrimitive,
    type TreeViewBranchProps,
  } from "@ark-ui/svelte";
  import type { TreeViewBranchRootContract } from "@pisagor/props";
  import { treeViewBranchRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { setTreeViewBranchContext } from "./tree-view.context";

  type Props = TreeViewBranchProps & TreeViewBranchRootContract;

  let {
    children,
    recipe = treeViewBranchRecipe,
    class: className,
    ...rest
  }: Props = $props();

  const slots = $derived(recipe());
  setTreeViewBranchContext({
    get slots() {
      return slots;
    },
  });
</script>

<TreeViewPrimitive.Branch
  {...rest}
  class={slots.base({ class: cn(className) })}
>
  {@render children?.()}
</TreeViewPrimitive.Branch>
