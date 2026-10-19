<script lang="ts">
  import {
    TreeView as TreeViewPrimitive,
    type TreeViewBranchProps,
  } from "@ark-ui/svelte";
  import type { TreeViewBranchRootContract } from "@pisagor/contracts";
  import { withTreeViewBranchProvider } from "./tree-view.context";

  type Props = TreeViewBranchProps & TreeViewBranchRootContract;

  let { children, ...rest }: Props = $props();
  const branch = withTreeViewBranchProvider(() => rest, {
    name: "Branch",
    slot: "base",
  });
</script>

<TreeViewPrimitive.Branch {...branch.props}>
  {@render children?.()}
</TreeViewPrimitive.Branch>
