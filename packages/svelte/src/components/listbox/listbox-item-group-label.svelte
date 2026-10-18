<script lang="ts">
  import {
    Listbox as ListboxPrimitive,
    type ListboxItemGroupLabelProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useListbox } from "./listbox.context";

  let {
    class: className,
    children,
    ...rest
  }: ListboxItemGroupLabelProps = $props();
  const styles = useListbox();
  const slots = $derived(styles.slots);
</script>

<ListboxPrimitive.ItemGroupLabel
  {...rest}
  class={slots.itemGroupLabel({ class: cn(className) })}
>
  {@render children?.()}
</ListboxPrimitive.ItemGroupLabel>
