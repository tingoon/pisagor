<script lang="ts">
import {
  type ComboboxControlProps,
  Combobox as ComboboxPrimitive,
} from "@ark-ui/svelte/combobox";
import { comboboxRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { useComboboxRoot } from "./combobox.context";

let { class: className, children, ...rest }: ComboboxControlProps = $props();
const ctx = useComboboxRoot();
const slots = $derived(ctx?.slots ?? comboboxRecipe());
</script>

<ComboboxPrimitive.Control
  {...rest}
  class={slots.control({ class: cn(className) })}
>
  {@render children?.()}
</ComboboxPrimitive.Control>
