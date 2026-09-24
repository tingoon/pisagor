<script lang="ts">
import type { DatePickerTableRowProps } from "@ark-ui/svelte/date-picker";
import { DatePicker as CalendarPrimitive } from "@ark-ui/svelte/date-picker";
import { cn } from "@pisagor/utils";
import { useCalendar } from "./calendar.context";

type Props = Omit<DatePickerTableRowProps, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useCalendar();
</script>

<CalendarPrimitive.TableRow {...rest} class={slots.tableRow({ class: cn(className) })}>
  {@render children?.()}
</CalendarPrimitive.TableRow>
