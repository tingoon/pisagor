<script lang="ts">
import {
  type ComboboxItemGroupLabelProps,
  Combobox as ComboboxPrimitive,
} from "@ark-ui/svelte/combobox";
import { comboboxRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { useComboboxRoot } from "./combobox.context";

let {
  class: className,
  children,
  ...rest
}: ComboboxItemGroupLabelProps = $props();
const ctx = useComboboxRoot();
const slots = $derived(ctx?.slots ?? comboboxRecipe());
</script>

<ComboboxPrimitive.ItemGroupLabel
  {...rest}
  class={slots.itemGroupLabel({ class: cn(className) })}
>
  {@render children?.()}
</ComboboxPrimitive.ItemGroupLabel>
