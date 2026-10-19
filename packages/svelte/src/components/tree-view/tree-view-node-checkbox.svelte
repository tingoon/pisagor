<script lang="ts">
  import {
    TreeView as TreeViewPrimitive,
    type TreeViewNodeCheckboxProps,
  } from "@ark-ui/svelte";
  import { formControlToggleRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { useFormControlSurface } from "../surface/use-form-control-surface";
  import { useTreeViewItemSlots } from "./tree-view.context";

  /** Node checkbox; render `NodeCheckboxIndicator` with your icons inside. */
  let {
    children,
    class: className,
    ...rest
  }: TreeViewNodeCheckboxProps = $props();
  const item = useTreeViewItemSlots();
  const surfaceVariant = useFormControlSurface();
</script>

<TreeViewPrimitive.NodeCheckbox
  {...rest}
  class={cn(
    formControlToggleRecipe({ surfaceVariant }),
    item.slots.checkbox(),
    className,
  )}
>
  {@render children?.()}
</TreeViewPrimitive.NodeCheckbox>
