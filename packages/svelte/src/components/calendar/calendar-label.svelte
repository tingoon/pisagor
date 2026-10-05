<script lang="ts">
import {
  DatePicker as CalendarPrimitive,
  type DatePickerLabelProps,
} from "@ark-ui/svelte/date-picker";
import { cn } from "@pisagor/utils";
import { useCalendar } from "./calendar.context";

let { class: className, children, ...rest }: DatePickerLabelProps = $props();
const { slots } = useCalendar();
</script>

<CalendarPrimitive.Label
  {...rest}
  class={slots.label({ class: cn(className) })}
>
  {@render children?.()}
</CalendarPrimitive.Label>
