<script lang="ts">
  import {
    DatePicker as CalendarPrimitive,
    type DatePickerClearTriggerProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: DatePickerClearTriggerProps = $props();
</script>

<CalendarPrimitive.ClearTrigger {...rest}
  >{@render children?.()}</CalendarPrimitive.ClearTrigger
>
