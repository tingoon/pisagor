<script lang="ts">
  import {
    TreeView as TreeViewPrimitive,
    type TreeViewBranchIndicatorProps,
  } from "@ark-ui/svelte";
  import { withTreeViewBranchContext } from "./tree-view.context";

  let { children, ...rest }: TreeViewBranchIndicatorProps = $props();
  const part = withTreeViewBranchContext(() => rest, {
    name: "BranchIndicator",
    slot: "indicator",
  });
</script>

<TreeViewPrimitive.BranchIndicator {...part.props}>
  {@render children?.()}
</TreeViewPrimitive.BranchIndicator>
