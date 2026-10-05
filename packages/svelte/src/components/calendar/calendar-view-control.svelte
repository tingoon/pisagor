<script lang="ts">
import {
  DatePicker as CalendarPrimitive,
  type DatePickerViewControlProps,
} from "@ark-ui/svelte/date-picker";
import { cn } from "@pisagor/utils";
import { useCalendar } from "./calendar.context";

let {
  class: className,
  children,
  ...rest
}: DatePickerViewControlProps = $props();
const { slots } = useCalendar();
</script>

<CalendarPrimitive.ViewControl
  {...rest}
  class={slots.viewControl({ class: cn(className) })}
>
  {@render children?.()}
</CalendarPrimitive.ViewControl>
