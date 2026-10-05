<script lang="ts">
import {
  DatePicker as CalendarPrimitive,
  type DatePickerTriggerProps,
} from "@ark-ui/svelte/date-picker";

let { children, ...rest }: DatePickerTriggerProps = $props();
</script>

<CalendarPrimitive.Trigger {...rest}
  >{@render children?.()}</CalendarPrimitive.Trigger
>
