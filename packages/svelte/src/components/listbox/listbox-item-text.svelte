<script lang="ts">
import type { ListboxItemTextProps } from "@ark-ui/svelte/listbox";
import { Listbox as ListboxPrimitive } from "@ark-ui/svelte/listbox";
import { listboxItemRecipe } from "@pisagor/recipes/listbox";
import { cn } from "@pisagor/utils";
import { useListboxItem } from "./listbox.context";

type Props = Omit<ListboxItemTextProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const ctx = useListboxItem();
const slots = $derived(ctx?.slots ?? listboxItemRecipe());
</script>

<ListboxPrimitive.ItemText {...rest} class={slots.text({ class: cn(className) })}>
  {@render children?.()}
</ListboxPrimitive.ItemText>
