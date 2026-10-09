<script lang="ts">
import {
  DatePicker as CalendarPrimitive,
  type DatePickerTableProps,
} from "@ark-ui/svelte/date-picker";
import { cn } from "@pisagor/utils";
import { useCalendar } from "./calendar.context";

let { class: className, children, ...rest }: DatePickerTableProps = $props();
const styles = useCalendar();
const slots = $derived(styles.slots);
</script>

<CalendarPrimitive.Table
  {...rest}
  class={slots.table({ class: cn(className) })}
>
  {@render children?.()}
</CalendarPrimitive.Table>
