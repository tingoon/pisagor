<script lang="ts">
  import {
    Combobox as ComboboxPrimitive,
    type ComboboxItemGroupLabelProps,
  } from "@ark-ui/svelte";
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
