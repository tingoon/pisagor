<script lang="ts">
import {
  DatePicker as CalendarPrimitive,
  type DatePickerLabelProps,
} from "@ark-ui/svelte/date-picker";
import { cn } from "@pisagor/utils";
import { useCalendar } from "./calendar.context";

let { class: className, children, ...rest }: DatePickerLabelProps = $props();
const styles = useCalendar();
const slots = $derived(styles.slots);
</script>

<CalendarPrimitive.Label
  {...rest}
  class={slots.label({ class: cn(className) })}
>
  {@render children?.()}
</CalendarPrimitive.Label>
