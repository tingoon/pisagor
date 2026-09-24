<script lang="ts">
import type { ListboxValueTextProps } from "@ark-ui/svelte/listbox";
import { Listbox as ListboxPrimitive } from "@ark-ui/svelte/listbox";
import { cn } from "@pisagor/utils";
import { useListbox } from "./listbox.context";

type Props = Omit<ListboxValueTextProps, "class"> & { class?: string | undefined };

let { class: className, ...rest }: Props = $props();
const { slots } = useListbox();
</script>

<ListboxPrimitive.ValueText {...rest} class={slots.valueText({ class: cn(className) })} />
