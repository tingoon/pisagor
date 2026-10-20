<script lang="ts">
  import {
    TreeView as TreeViewPrimitive,
    type TreeViewBranchIndentGuideProps,
  } from "@ark-ui/svelte";
  import { withTreeViewBranchContext } from "./tree-view.context";

  let { ...rest }: TreeViewBranchIndentGuideProps = $props();
  const part = withTreeViewBranchContext(() => rest, {
    name: "BranchIndentGuide",
    slot: "indentGuide",
  });
</script>

<TreeViewPrimitive.BranchIndentGuide {...part.props} />
