<script lang="ts">
import type { ListboxItemGroupLabelProps } from "@ark-ui/svelte/listbox";
import { Listbox as ListboxPrimitive } from "@ark-ui/svelte/listbox";
import { cn } from "@pisagor/utils";
import { useListbox } from "./listbox.context";

type Props = Omit<ListboxItemGroupLabelProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const { slots } = useListbox();
</script>

<ListboxPrimitive.ItemGroupLabel {...rest} class={slots.itemGroupLabel({ class: cn(className) })}>
  {@render children?.()}
</ListboxPrimitive.ItemGroupLabel>
