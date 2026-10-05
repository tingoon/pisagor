<script lang="ts">
import {
  type TreeViewLabelProps,
  TreeView as TreeViewPrimitive,
} from "@ark-ui/svelte/tree-view";
import { cn } from "@pisagor/utils";
import { useTreeView } from "./tree-view.context";

let { class: className, children, ...rest }: TreeViewLabelProps = $props();
const { slots } = useTreeView();
</script>

<TreeViewPrimitive.Label
  {...rest}
  class={slots.label({ class: cn(className) })}
>
  {@render children?.()}
</TreeViewPrimitive.Label>
