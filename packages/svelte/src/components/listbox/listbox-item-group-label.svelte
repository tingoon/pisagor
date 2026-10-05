<script lang="ts">
import {
  type ListboxItemGroupLabelProps,
  Listbox as ListboxPrimitive,
} from "@ark-ui/svelte/listbox";
import { cn } from "@pisagor/utils";
import { useListbox } from "./listbox.context";

let {
  class: className,
  children,
  ...rest
}: ListboxItemGroupLabelProps = $props();
const { slots } = useListbox();
</script>

<ListboxPrimitive.ItemGroupLabel
  {...rest}
  class={slots.itemGroupLabel({ class: cn(className) })}
>
  {@render children?.()}
</ListboxPrimitive.ItemGroupLabel>
