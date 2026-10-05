<script lang="ts">
import {
  DatePicker as CalendarPrimitive,
  type DatePickerRangeTextProps,
} from "@ark-ui/svelte/date-picker";
import { cn } from "@pisagor/utils";
import { useCalendar } from "./calendar.context";

let { class: className, ...rest }: DatePickerRangeTextProps = $props();
const { slots } = useCalendar();
</script>

<CalendarPrimitive.RangeText
  {...rest}
  class={slots.rangeText({ class: cn(className) })}
/>
