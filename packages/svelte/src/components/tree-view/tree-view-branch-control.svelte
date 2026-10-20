<script lang="ts">
  import {
    TreeView as TreeViewPrimitive,
    type TreeViewBranchControlProps,
  } from "@ark-ui/svelte";
  import { withTreeViewContext } from "./tree-view.context";

  let { children, ...rest }: TreeViewBranchControlProps = $props();
  const part = withTreeViewContext(() => rest, {
    name: "BranchControl",
    slot: "control",
  });
</script>

<TreeViewPrimitive.BranchControl {...part.props}>
  {@render children?.()}
</TreeViewPrimitive.BranchControl>
