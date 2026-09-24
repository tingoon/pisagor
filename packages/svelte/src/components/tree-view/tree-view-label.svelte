<script lang="ts">
import type { TreeViewLabelProps } from "@ark-ui/svelte/tree-view";
import { TreeView as TreeViewPrimitive } from "@ark-ui/svelte/tree-view";
import { cn } from "@pisagor/utils";
import { useTreeView } from "./tree-view.context";

type Props = Omit<TreeViewLabelProps, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useTreeView();
</script>

<TreeViewPrimitive.Label {...rest} class={slots.label({ class: cn(className) })}>
  {@render children?.()}
</TreeViewPrimitive.Label>
