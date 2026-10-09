<script lang="ts">
import {
  DatePicker as CalendarPrimitive,
  type DatePickerTableRowProps,
} from "@ark-ui/svelte/date-picker";
import { cn } from "@pisagor/utils";
import { useCalendar } from "./calendar.context";

let { class: className, children, ...rest }: DatePickerTableRowProps = $props();
const styles = useCalendar();
const slots = $derived(styles.slots);
</script>

<CalendarPrimitive.TableRow
  {...rest}
  class={slots.tableRow({ class: cn(className) })}
>
  {@render children?.()}
</CalendarPrimitive.TableRow>
