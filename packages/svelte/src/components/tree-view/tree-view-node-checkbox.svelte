<script lang="ts">
  import {
    TreeView as TreeViewPrimitive,
    type TreeViewNodeCheckboxProps,
  } from "@ark-ui/svelte";
  import {
    formControlToggleRecipe,
    treeViewItemRecipe,
  } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { CheckIcon, MinusIcon } from "phosphor-svelte";
  import { useFormControlSurface } from "../surface/use-form-control-surface";
  import { useTreeViewItem } from "./tree-view.context";

  let { class: className, ...rest }: TreeViewNodeCheckboxProps = $props();
  const item = useTreeViewItem();
  const slots = $derived(item?.slots ?? treeViewItemRecipe());
  const surfaceVariant = useFormControlSurface();
</script>

{#snippet indeterminate()}
  <MinusIcon />
{/snippet}

<TreeViewPrimitive.NodeCheckbox
  {...rest}
  class={cn(
    formControlToggleRecipe({ surfaceVariant }),
    slots.checkbox(),
    className,
  )}
>
  <TreeViewPrimitive.NodeCheckboxIndicator {indeterminate}>
    <CheckIcon />
  </TreeViewPrimitive.NodeCheckboxIndicator>
</TreeViewPrimitive.NodeCheckbox>
