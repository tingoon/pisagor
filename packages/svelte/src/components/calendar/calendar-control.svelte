<script lang="ts">
import type { DatePickerControlProps } from "@ark-ui/svelte/date-picker";
import { DatePicker as CalendarPrimitive } from "@ark-ui/svelte/date-picker";
import { useCalendar } from "./calendar.context";

type Props = Omit<DatePickerControlProps, "class"> & {
  class?: string | undefined;
};
let { class: className, children, ...rest }: Props = $props();
const { slots } = useCalendar();
</script>

<CalendarPrimitive.Control
  {...rest}
  class={slots.control({ class: className })}
>
  {@render children?.()}
</CalendarPrimitive.Control>
