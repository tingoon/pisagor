<script lang="ts">
import {
  TreeView as TreeViewPrimitive,
  type TreeViewTreeProps,
} from "@ark-ui/svelte/tree-view";
import { cn } from "@pisagor/utils";
import { useTreeView } from "./tree-view.context";

let { class: className, children, ...rest }: TreeViewTreeProps = $props();
const { slots } = useTreeView();
</script>

<TreeViewPrimitive.Tree {...rest} class={slots.tree({ class: cn(className) })}>
  {@render children?.()}
</TreeViewPrimitive.Tree>
