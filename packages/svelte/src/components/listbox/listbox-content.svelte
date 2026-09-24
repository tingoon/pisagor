<script lang="ts">
import type { ListboxContentProps } from "@ark-ui/svelte/listbox";
import { Listbox as ListboxPrimitive } from "@ark-ui/svelte/listbox";
import { cn } from "@pisagor/utils";
import { useListbox } from "./listbox.context";

type Props = Omit<ListboxContentProps, "class"> & { class?: string | undefined };

let { class: className, children, ...rest }: Props = $props();
const { slots } = useListbox();
</script>

<ListboxPrimitive.Content {...rest} class={slots.content({ class: cn(className) })}>
  {@render children?.()}
</ListboxPrimitive.Content>
