<script lang="ts">
  import {
    DatePicker as CalendarPrimitive,
    type DatePickerViewControlProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useStyles } from "./calendar.context";

  let {
    class: className,
    children,
    ...rest
  }: DatePickerViewControlProps = $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<CalendarPrimitive.ViewControl
  {...rest}
  class={slots.viewControl({ class: cn(className) })}
>
  {@render children?.()}
</CalendarPrimitive.ViewControl>
