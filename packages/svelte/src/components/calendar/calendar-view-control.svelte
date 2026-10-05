<script lang="ts">
import type { DatePickerViewControlProps } from "@ark-ui/svelte/date-picker";
import { DatePicker as CalendarPrimitive } from "@ark-ui/svelte/date-picker";
import { useCalendar } from "./calendar.context";

type Props = Omit<DatePickerViewControlProps, "class"> & {
  class?: string | undefined;
};
let { class: className, children, ...rest }: Props = $props();
const { slots } = useCalendar();
</script>

<CalendarPrimitive.ViewControl
  {...rest}
  class={slots.viewControl({ class: className })}
>
  {@render children?.()}
</CalendarPrimitive.ViewControl>
