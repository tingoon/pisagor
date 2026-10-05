<script lang="ts">
import {
  type TreeViewBranchContentProps,
  TreeView as TreeViewPrimitive,
} from "@ark-ui/svelte/tree-view";
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
