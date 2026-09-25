<script lang="ts">
import type { ComboboxListProps } from "@ark-ui/svelte/combobox";
import { Combobox as ComboboxPrimitive } from "@ark-ui/svelte/combobox";
import { comboboxRecipe } from "@pisagor/recipes/combobox";
import { cn } from "@pisagor/utils";
import { useComboboxRoot } from "./combobox.context";

type Props = Omit<ComboboxListProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const ctx = useComboboxRoot();
const slots = $derived(ctx?.slots ?? comboboxRecipe());
</script>

<ComboboxPrimitive.List {...rest} class={slots.list({ class: cn(className) })}>
  {@render children?.()}
</ComboboxPrimitive.List>
