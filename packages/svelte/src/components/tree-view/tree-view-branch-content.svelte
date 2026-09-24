<script lang="ts">
import type { TreeViewBranchContentProps } from "@ark-ui/svelte/tree-view";
import { TreeView as TreeViewPrimitive } from "@ark-ui/svelte/tree-view";
import { cn } from "@pisagor/utils";
import { useTreeViewBranch } from "./tree-view.context";

type Props = Omit<TreeViewBranchContentProps, "class"> & { class?: string | undefined };
let { children, class: className, ...rest }: Props = $props();
const { slots } = useTreeViewBranch();
</script>

<TreeViewPrimitive.BranchContent {...rest} class={slots.content({ class: cn(className) })}>
  <TreeViewPrimitive.BranchIndentGuide class={slots.indentGuide()} />
  {@render children?.()}
</TreeViewPrimitive.BranchContent>
