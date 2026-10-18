<script lang="ts">
  import {
    DatePicker as CalendarPrimitive,
    type DatePickerControlProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useStyles } from "./calendar.context";

  let {
    class: className,
    children,
    ...rest
  }: DatePickerControlProps = $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<CalendarPrimitive.Control
  {...rest}
  class={slots.control({ class: cn(className) })}
>
  {@render children?.()}
</CalendarPrimitive.Control>
