<script lang="ts">
  import {
    TreeView as TreeViewPrimitive,
    type TreeViewBranchContentProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useTreeViewBranch } from "./tree-view.context";

  let {
    children,
    class: className,
    ...rest
  }: TreeViewBranchContentProps = $props();
  const { slots } = useTreeViewBranch();
</script>

<TreeViewPrimitive.BranchContent
  {...rest}
  class={slots.content({ class: cn(className) })}
>
  <TreeViewPrimitive.BranchIndentGuide class={slots.indentGuide()} />
  {@render children?.()}
</TreeViewPrimitive.BranchContent>
