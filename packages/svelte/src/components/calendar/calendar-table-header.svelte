<script lang="ts">
import type { DatePickerTableHeaderProps } from "@ark-ui/svelte/date-picker";
import { DatePicker as CalendarPrimitive } from "@ark-ui/svelte/date-picker";
import { cn } from "@pisagor/utils";
import { useCalendar } from "./calendar.context";

type Props = Omit<DatePickerTableHeaderProps, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useCalendar();
</script>

<CalendarPrimitive.TableHeader {...rest} class={slots.tableHeader({ class: cn(className) })}>
  {@render children?.()}
</CalendarPrimitive.TableHeader>
