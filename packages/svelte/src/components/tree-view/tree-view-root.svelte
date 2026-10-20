<script
  generics="T extends Record<string, unknown> = Record<string, unknown>"
  lang="ts"
>
  import {
    TreeView as TreeViewPrimitive,
    type TreeViewRootProps,
  } from "@ark-ui/svelte";
  import type { TreeViewRootContract } from "@pisagor/contracts";
  import { withTreeViewProvider } from "./tree-view.context";

  type Props = TreeViewRootProps<T> & TreeViewRootContract;

  let { children, ...rest }: Props = $props();
  const root = withTreeViewProvider(() => rest, {
    name: "Root",
    slot: "base",
  });
</script>

<TreeViewPrimitive.Root {...root.props as TreeViewRootProps<T>}>
  {@render children?.()}
</TreeViewPrimitive.Root>
