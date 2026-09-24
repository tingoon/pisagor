<script lang="ts">
import type { DatePickerLabelProps } from "@ark-ui/svelte/date-picker";
import { DatePicker as CalendarPrimitive } from "@ark-ui/svelte/date-picker";
import { cn } from "@pisagor/utils";
import { useCalendar } from "./calendar.context";

type Props = Omit<DatePickerLabelProps, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useCalendar();
</script>

<CalendarPrimitive.Label {...rest} class={slots.label({ class: cn(className) })}>
  {@render children?.()}
</CalendarPrimitive.Label>
