<script lang="ts">
  import {
    DatePicker as CalendarPrimitive,
    type DatePickerLabelProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useStyles } from "./calendar.context";

  let { class: className, children, ...rest }: DatePickerLabelProps = $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<CalendarPrimitive.Label
  {...rest}
  class={slots.label({ class: cn(className) })}
>
  {@render children?.()}
</CalendarPrimitive.Label>
