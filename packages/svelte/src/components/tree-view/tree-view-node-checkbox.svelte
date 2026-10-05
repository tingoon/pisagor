<script lang="ts">
import {
  type TreeViewNodeCheckboxProps,
  TreeView as TreeViewPrimitive,
} from "@ark-ui/svelte/tree-view";
import { formControlToggleRecipe, treeViewItemRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import CheckIcon from "phosphor-svelte/lib/CheckIcon";
import MinusIcon from "phosphor-svelte/lib/MinusIcon";
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
