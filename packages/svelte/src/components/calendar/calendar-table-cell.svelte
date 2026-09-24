<script lang="ts">
import type {
  DatePickerTableCellProps,
  DatePickerTableCellTriggerProps,
} from "@ark-ui/svelte/date-picker";
import { DatePicker as CalendarPrimitive } from "@ark-ui/svelte/date-picker";
import { calendarTableCellRecipe } from "@pisagor/recipes/calendar";
import { cn } from "@pisagor/utils";

type Props = Omit<DatePickerTableCellTriggerProps, "class" | "value"> &
  Pick<DatePickerTableCellProps, "value" | "visibleRange"> & {
    class?: string | undefined;
    recipe?: typeof calendarTableCellRecipe;
  };

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
  <CalendarPrimitive.TableCellTrigger {...rest} class={slots.trigger({ class: cn(className) })}>
    {@render children?.()}
  </CalendarPrimitive.TableCellTrigger>
</CalendarPrimitive.TableCell>
