<script lang="ts">
import type { DatePickerTableRowProps } from "@ark-ui/svelte/date-picker";
import { DatePicker as CalendarPrimitive } from "@ark-ui/svelte/date-picker";
import { useCalendar } from "./calendar.context";

type Props = Omit<DatePickerTableRowProps, "class"> & {
  class?: string | undefined;
};
let { class: className, children, ...rest }: Props = $props();
const { slots } = useCalendar();
</script>

<CalendarPrimitive.TableRow
  {...rest}
  class={slots.tableRow({ class: className })}
>
  {@render children?.()}
</CalendarPrimitive.TableRow>
