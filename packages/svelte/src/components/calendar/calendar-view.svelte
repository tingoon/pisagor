<script lang="ts">
import {
  DatePicker as CalendarPrimitive,
  type DatePickerViewProps,
} from "@ark-ui/svelte/date-picker";
import { cn } from "@pisagor/utils";
import { useCalendar } from "./calendar.context";

let { class: className, children, ...rest }: DatePickerViewProps = $props();
const { slots } = useCalendar();
</script>

<CalendarPrimitive.View {...rest} class={slots.view({ class: cn(className) })}>
  {@render children?.()}
</CalendarPrimitive.View>
