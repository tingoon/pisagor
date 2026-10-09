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
const styles = useCalendar();
const slots = $derived(styles.slots);
</script>

<CalendarPrimitive.TableHeader
  {...rest}
  class={slots.tableHeader({ class: cn(className) })}
>
  {@render children?.()}
</CalendarPrimitive.TableHeader>
