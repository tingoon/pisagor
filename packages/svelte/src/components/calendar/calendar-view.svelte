<script lang="ts">
  import {
    DatePicker as CalendarPrimitive,
    type DatePickerViewProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useStyles } from "./calendar.context";

  let { class: className, children, ...rest }: DatePickerViewProps = $props();
  const styles = useStyles();
  const slots = $derived(styles.slots);
</script>

<CalendarPrimitive.View {...rest} class={slots.view({ class: cn(className) })}>
  {@render children?.()}
</CalendarPrimitive.View>
