<script lang="ts">
import type { DatePickerControlProps } from "@ark-ui/svelte/date-picker";
import { DatePicker as CalendarPrimitive } from "@ark-ui/svelte/date-picker";
import { cn } from "@pisagor/utils";
import { useCalendar } from "./calendar.context";

type Props = Omit<DatePickerControlProps, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useCalendar();
</script>

<CalendarPrimitive.Control {...rest} class={slots.control({ class: cn(className) })}>
  {@render children?.()}
</CalendarPrimitive.Control>
