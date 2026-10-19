<script lang="ts">
  import {
    TreeView as TreeViewPrimitive,
    type TreeViewBranchTextProps,
  } from "@ark-ui/svelte";
  import { withTreeViewBranchContext } from "./tree-view.context";

  let { children, ...rest }: TreeViewBranchTextProps = $props();
  const part = withTreeViewBranchContext(() => rest, {
    name: "BranchText",
    slot: "title",
  });
</script>

<TreeViewPrimitive.BranchText {...part.props}>
  {@render children?.()}
</TreeViewPrimitive.BranchText>
