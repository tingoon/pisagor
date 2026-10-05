<script lang="ts">
import type { ComboboxItemGroupLabelProps } from "@ark-ui/svelte/combobox";
import { Combobox as ComboboxPrimitive } from "@ark-ui/svelte/combobox";
import { comboboxRecipe } from "@pisagor/recipes";
import { useComboboxRoot } from "./combobox.context";

type Props = Omit<ComboboxItemGroupLabelProps, "class"> & {
  class?: string | undefined;
};

let { class: className, children, ...rest }: Props = $props();
const ctx = useComboboxRoot();
const slots = $derived(ctx?.slots ?? comboboxRecipe());
</script>

<ComboboxPrimitive.ItemGroupLabel
  {...rest}
  class={slots.itemGroupLabel({ class: className })}
>
  {@render children?.()}
</ComboboxPrimitive.ItemGroupLabel>
