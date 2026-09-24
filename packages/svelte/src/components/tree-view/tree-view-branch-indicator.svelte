<script lang="ts">
import type { TreeViewBranchIndicatorProps } from "@ark-ui/svelte/tree-view";
import { TreeView as TreeViewPrimitive } from "@ark-ui/svelte/tree-view";
import { cn } from "@pisagor/utils";
import CaretRightIcon from "phosphor-svelte/lib/CaretRightIcon";
import { useTreeViewBranch } from "./tree-view.context";

type Props = Omit<TreeViewBranchIndicatorProps, "class"> & { class?: string | undefined };
let { class: className, ...rest }: Props = $props();
const { slots } = useTreeViewBranch();
</script>

<TreeViewPrimitive.BranchIndicator {...rest} class={slots.indicator({ class: cn(className) })}>
  <CaretRightIcon />
</TreeViewPrimitive.BranchIndicator>
