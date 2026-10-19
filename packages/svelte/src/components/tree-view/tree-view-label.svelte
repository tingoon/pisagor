<script lang="ts">
  import {
    TreeView as TreeViewPrimitive,
    type TreeViewLabelProps,
  } from "@ark-ui/svelte";
  import { withTreeViewContext } from "./tree-view.context";

  let { children, ...rest }: TreeViewLabelProps = $props();
  const part = withTreeViewContext(() => rest, { name: "Label" });
</script>

<TreeViewPrimitive.Label {...part.props}>
  {@render children?.()}
</TreeViewPrimitive.Label>
