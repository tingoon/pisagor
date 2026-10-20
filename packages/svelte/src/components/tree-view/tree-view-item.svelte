<script lang="ts">
  import {
    TreeView as TreeViewPrimitive,
    type TreeViewItemProps,
  } from "@ark-ui/svelte";
  import type { TreeViewItemRootContract } from "@pisagor/contracts";
  import { cn } from "@pisagor/utils";
  import {
    useTreeViewStyles,
    withTreeViewItemProvider,
  } from "./tree-view.context";

  type Props = TreeViewItemProps & TreeViewItemRootContract;

  /** Item; shares the row (`control`) styles with `BranchControl`. */
  let { children, class: className, ...rest }: Props = $props();
  const styles = useTreeViewStyles();
  const item = withTreeViewItemProvider(
    () => ({ ...rest, class: cn(styles.slots.control(), className) }),
    { name: "Item", slot: "base" },
  );
</script>

<TreeViewPrimitive.Item {...item.props}>
  {@render children?.()}
</TreeViewPrimitive.Item>
