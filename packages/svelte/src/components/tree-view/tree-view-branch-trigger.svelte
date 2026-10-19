<script lang="ts">
  import {
    TreeView as TreeViewPrimitive,
    type TreeViewBranchTriggerProps,
  } from "@ark-ui/svelte";
  import { withTreeViewBranchContext } from "./tree-view.context";

  let { children, ...rest }: TreeViewBranchTriggerProps = $props();
  const part = withTreeViewBranchContext(() => rest, {
    name: "BranchTrigger",
    slot: "trigger",
  });
</script>

<TreeViewPrimitive.BranchTrigger {...part.props}>
  {@render children?.()}
</TreeViewPrimitive.BranchTrigger>
