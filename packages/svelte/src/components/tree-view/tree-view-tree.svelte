<script lang="ts">
import type { TreeViewTreeProps } from "@ark-ui/svelte/tree-view";
import { TreeView as TreeViewPrimitive } from "@ark-ui/svelte/tree-view";
import { cn } from "@pisagor/utils";
import { useTreeView } from "./tree-view.context";

type Props = Omit<TreeViewTreeProps, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useTreeView();
</script>

<TreeViewPrimitive.Tree {...rest} class={slots.tree({ class: cn(className) })}>
  {@render children?.()}
</TreeViewPrimitive.Tree>
