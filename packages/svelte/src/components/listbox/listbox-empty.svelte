<script lang="ts">
import {
  type ListboxEmptyProps,
  Listbox as ListboxPrimitive,
} from "@ark-ui/svelte/listbox";
import { cn } from "@pisagor/utils";
import { useListbox } from "./listbox.context";

let { class: className, children, ...rest }: ListboxEmptyProps = $props();
const styles = useListbox();
const slots = $derived(styles.slots);
</script>

<ListboxPrimitive.Empty {...rest} class={slots.empty({ class: cn(className) })}>
  {@render children?.()}
</ListboxPrimitive.Empty>
