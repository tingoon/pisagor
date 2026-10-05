<script lang="ts">
import {
  DatePicker as CalendarPrimitive,
  type DatePickerPresetTriggerProps,
} from "@ark-ui/svelte/date-picker";

let { children, ...rest }: DatePickerPresetTriggerProps = $props();
</script>

<CalendarPrimitive.PresetTrigger {...rest}
  >{@render children?.()}</CalendarPrimitive.PresetTrigger
>
