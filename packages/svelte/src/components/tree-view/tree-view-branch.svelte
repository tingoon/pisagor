<script lang="ts">
import type { TreeViewBranchProps } from "@ark-ui/svelte/tree-view";
import { TreeView as TreeViewPrimitive } from "@ark-ui/svelte/tree-view";
import { treeViewBranchRecipe } from "@pisagor/recipes/tree-view";
import { cn } from "@pisagor/utils";
import { setTreeViewBranchContext } from "./tree-view.context";

type Props = Omit<TreeViewBranchProps, "class"> & {
  branchRecipe?: typeof treeViewBranchRecipe;
  class?: string | undefined;
};

let { children, branchRecipe = treeViewBranchRecipe, class: className, ...rest }: Props = $props();

const slots = $derived(branchRecipe());
setTreeViewBranchContext({
  get slots() {
    return slots;
  },
});
</script>

<TreeViewPrimitive.Branch {...rest} class={slots.base({ class: cn(className) })}>
  {@render children?.()}
</TreeViewPrimitive.Branch>
