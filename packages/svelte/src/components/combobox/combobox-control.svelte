<script lang="ts">
import type { ComboboxControlProps } from "@ark-ui/svelte/combobox";
import { Combobox as ComboboxPrimitive } from "@ark-ui/svelte/combobox";
import { comboboxRecipe } from "@pisagor/recipes/combobox";
import { cn } from "@pisagor/utils";
import { useComboboxRoot } from "./combobox.context";

type Props = Omit<ComboboxControlProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const ctx = useComboboxRoot();
const slots = $derived(ctx?.slots ?? comboboxRecipe());
</script>

<ComboboxPrimitive.Control {...rest} class={slots.control({ class: cn(className) })}>
  {@render children?.()}
</ComboboxPrimitive.Control>
