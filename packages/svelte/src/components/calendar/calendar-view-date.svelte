<script lang="ts">
import type { DatePickerRangeTextProps } from "@ark-ui/svelte/date-picker";
import { DatePicker as CalendarPrimitive } from "@ark-ui/svelte/date-picker";
import { cn } from "@pisagor/utils";
import { useCalendar } from "./calendar.context";

type Props = Omit<DatePickerRangeTextProps, "class"> & { class?: string | undefined };
let { class: className, ...rest }: Props = $props();
const { slots } = useCalendar();
</script>

<CalendarPrimitive.RangeText {...rest} class={slots.rangeText({ class: cn(className) })} />
