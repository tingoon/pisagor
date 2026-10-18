<script lang="ts">
  import {
    DatePicker as CalendarPrimitive,
    type DatePickerRangeTextProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useStyles } from "./calendar.context";

  let { class: className, ...rest }: DatePickerRangeTextProps = $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<CalendarPrimitive.RangeText
  {...rest}
  class={slots.rangeText({ class: cn(className) })}
/>
