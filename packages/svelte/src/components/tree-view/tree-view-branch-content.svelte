<script lang="ts">
  import {
    TreeView as TreeViewPrimitive,
    type TreeViewBranchContentProps,
  } from "@ark-ui/svelte";
  import { withTreeViewBranchContext } from "./tree-view.context";

  let { children, ...rest }: TreeViewBranchContentProps = $props();
  const part = withTreeViewBranchContext(() => rest, {
    name: "BranchContent",
    slot: "content",
  });
</script>

<TreeViewPrimitive.BranchContent {...part.props}>
  {@render children?.()}
</TreeViewPrimitive.BranchContent>
