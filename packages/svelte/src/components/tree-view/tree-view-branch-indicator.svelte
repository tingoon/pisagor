<script lang="ts">
  import {
    TreeView as TreeViewPrimitive,
    type TreeViewBranchIndicatorProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import CaretRightIcon from "phosphor-svelte/lib/CaretRightIcon";
  import { useTreeViewBranch } from "./tree-view.context";

  let { class: className, ...rest }: TreeViewBranchIndicatorProps = $props();
  const { slots } = useTreeViewBranch();
</script>

<TreeViewPrimitive.BranchIndicator
  {...rest}
  class={slots.indicator({ class: cn(className) })}
>
  <CaretRightIcon />
</TreeViewPrimitive.BranchIndicator>
