<script lang="ts">
import type { TreeViewBranchProps } from "@ark-ui/svelte/tree-view";
import { TreeView as TreeViewPrimitive } from "@ark-ui/svelte/tree-view";
import type { TreeViewBranchProps as BaseTreeViewBranchProps } from "@pisagor/props";
import { treeViewBranchRecipe } from "@pisagor/recipes";
import { setTreeViewBranchContext } from "./tree-view.context";

type Props = Omit<TreeViewBranchProps, "class"> & {
  class?: string | undefined;
} & BaseTreeViewBranchProps;

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

<TreeViewPrimitive.Branch {...rest} class={slots.base({ class: className })}>
  {@render children?.()}
</TreeViewPrimitive.Branch>
