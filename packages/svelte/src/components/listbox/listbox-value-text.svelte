<script lang="ts">
import {
  Listbox as ListboxPrimitive,
  type ListboxValueTextProps,
} from "@ark-ui/svelte/listbox";
import { cn } from "@pisagor/utils";
import { useListbox } from "./listbox.context";

let { class: className, ...rest }: ListboxValueTextProps = $props();
const styles = useListbox();
const slots = $derived(styles.slots);
</script>

<ListboxPrimitive.ValueText
  {...rest}
  class={slots.valueText({ class: cn(className) })}
/>
