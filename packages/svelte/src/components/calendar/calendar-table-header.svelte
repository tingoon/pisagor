<script lang="ts">
import {
  DatePicker as CalendarPrimitive,
  type DatePickerTableHeaderProps,
} from "@ark-ui/svelte/date-picker";
import { cn } from "@pisagor/utils";
import { useCalendar } from "./calendar.context";

let {
  class: className,
  children,
  ...rest
}: DatePickerTableHeaderProps = $props();
const { slots } = useCalendar();
</script>

<CalendarPrimitive.TableHeader
  {...rest}
  class={slots.tableHeader({ class: cn(className) })}
>
  {@render children?.()}
</CalendarPrimitive.TableHeader>
