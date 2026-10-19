<script lang="ts">
  import {
    TreeView as TreeViewPrimitive,
    type TreeViewTreeProps,
  } from "@ark-ui/svelte";
  import { withTreeViewContext } from "./tree-view.context";

  let { children, ...rest }: TreeViewTreeProps = $props();
  const part = withTreeViewContext(() => rest, { name: "Tree" });
</script>

<TreeViewPrimitive.Tree {...part.props}>
  {@render children?.()}
</TreeViewPrimitive.Tree>
