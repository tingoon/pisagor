<script lang="ts">
import type { ListboxEmptyProps } from "@ark-ui/svelte/listbox";
import { Listbox as ListboxPrimitive } from "@ark-ui/svelte/listbox";
import { cn } from "@pisagor/utils";
import { useListbox } from "./listbox.context";

type Props = Omit<ListboxEmptyProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const { slots } = useListbox();
</script>

<ListboxPrimitive.Empty {...rest} class={slots.empty({ class: cn(className) })}>
  {@render children?.()}
</ListboxPrimitive.Empty>
