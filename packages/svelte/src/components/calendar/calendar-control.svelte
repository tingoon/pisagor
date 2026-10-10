<script lang="ts">
import {
  DatePicker as CalendarPrimitive,
  type DatePickerControlProps,
} from "@ark-ui/svelte/date-picker";
import { cn } from "@pisagor/utils";
import { useCalendar } from "./calendar.context";

let { class: className, children, ...rest }: DatePickerControlProps = $props();
const styles = useCalendar();
const slots = $derived(styles.slots);
</script>

<CalendarPrimitive.Control
  {...rest}
  class={slots.control({ class: cn(className) })}
>
  {@render children?.()}
</CalendarPrimitive.Control>
