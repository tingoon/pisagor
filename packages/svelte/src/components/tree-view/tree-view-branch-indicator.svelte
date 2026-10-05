<script lang="ts">
import {
  type TreeViewBranchIndicatorProps,
  TreeView as TreeViewPrimitive,
} from "@ark-ui/svelte/tree-view";
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
