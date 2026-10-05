<script lang="ts">
import type {
  DatePickerTableCellProps,
  DatePickerTableCellTriggerProps,
} from "@ark-ui/svelte/date-picker";
import { DatePicker as CalendarPrimitive } from "@ark-ui/svelte/date-picker";
import type { CalendarTableCellProps as BaseCalendarTableCellProps } from "@pisagor/props";
import { calendarTableCellRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";

type Props = Omit<DatePickerTableCellTriggerProps, "value"> &
  Pick<DatePickerTableCellProps, "value" | "visibleRange"> &
  BaseCalendarTableCellProps;

let {
  value,
  visibleRange,
  recipe = calendarTableCellRecipe,
  class: className,
  children,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
</script>

<CalendarPrimitive.TableCell class={slots.base()} {value} {visibleRange}>
  <CalendarPrimitive.TableCellTrigger
    {...rest}
    class={slots.trigger({ class: cn(className) })}
  >
    {@render children?.()}
  </CalendarPrimitive.TableCellTrigger>
</CalendarPrimitive.TableCell>
