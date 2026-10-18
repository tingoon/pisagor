<script lang="ts">
  import {
    DatePicker as CalendarPrimitive,
    type DatePickerTableRowProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useStyles } from "./calendar.context";

  let {
    class: className,
    children,
    ...rest
  }: DatePickerTableRowProps = $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<CalendarPrimitive.TableRow
  {...rest}
  class={slots.tableRow({ class: cn(className) })}
>
  {@render children?.()}
</CalendarPrimitive.TableRow>
