<script lang="ts">
  import {
    TreeView as TreeViewPrimitive,
    type TreeViewLabelProps,
  } from "@ark-ui/svelte";
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
