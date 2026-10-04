<script lang="ts">
import type { TreeViewBranchProps } from "@ark-ui/svelte/tree-view";
import { TreeView as TreeViewPrimitive } from "@ark-ui/svelte/tree-view";
import type { TreeViewBranchProps as TreeViewBranchSharedProps } from "@pisagor/props";
import { treeViewBranchRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { setTreeViewBranchContext } from "./tree-view.context";

type Props = Omit<TreeViewBranchProps, "class"> &
  {
  class?: string | undefined;
  } & TreeViewBranchSharedProps;

let { children, recipe = treeViewBranchRecipe, class: className, ...rest }: Props = $props();

const slots = $derived(recipe());
setTreeViewBranchContext({
  get slots() {
    return slots;
  },
});
</script>

<TreeViewPrimitive.Branch {...rest} class={slots.base({ class: cn(className) })}>
  {@render children?.()}
</TreeViewPrimitive.Branch>
