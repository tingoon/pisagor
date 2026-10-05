<script lang="ts">
import {
  type ComboboxListProps,
  Combobox as ComboboxPrimitive,
} from "@ark-ui/svelte/combobox";
import { comboboxRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { useComboboxRoot } from "./combobox.context";

let { class: className, children, ...rest }: ComboboxListProps = $props();
const ctx = useComboboxRoot();
const slots = $derived(ctx?.slots ?? comboboxRecipe());
</script>

<ComboboxPrimitive.List {...rest} class={slots.list({ class: cn(className) })}>
  {@render children?.()}
</ComboboxPrimitive.List>
