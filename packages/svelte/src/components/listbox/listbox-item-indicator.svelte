<script lang="ts">
import type { ListboxItemIndicatorProps } from "@ark-ui/svelte/listbox";
import { Listbox as ListboxPrimitive } from "@ark-ui/svelte/listbox";
import { listboxItemRecipe } from "@pisagor/recipes/listbox";
import { cn } from "@pisagor/utils";
import CheckIcon from "phosphor-svelte/lib/CheckIcon";
import { useListboxItem } from "./listbox.context";

type Props = Omit<ListboxItemIndicatorProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const ctx = useListboxItem();
const slots = $derived(ctx?.slots ?? listboxItemRecipe());
</script>

<ListboxPrimitive.ItemIndicator {...rest} class={slots.indicator({ class: cn(className) })}>
  {#if children}
    {@render children()}
  {:else}
    <CheckIcon />
  {/if}
</ListboxPrimitive.ItemIndicator>
