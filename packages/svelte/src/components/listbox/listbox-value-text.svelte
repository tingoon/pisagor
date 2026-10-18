<script lang="ts">
  import {
    Listbox as ListboxPrimitive,
    type ListboxValueTextProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useStyles } from "./listbox.context";

  let { class: className, ...rest }: ListboxValueTextProps = $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<ListboxPrimitive.ValueText
  {...rest}
  class={slots.valueText({ class: cn(className) })}
/>
