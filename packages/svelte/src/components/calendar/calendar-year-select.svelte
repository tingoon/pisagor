<script lang="ts">
import {
  DatePicker as CalendarPrimitive,
  type DatePickerYearSelectProps,
} from "@ark-ui/svelte/date-picker";
import { formControlShellRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import CaretDownIcon from "phosphor-svelte/lib/CaretDownIcon";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { useCalendar } from "./calendar.context";

let { class: className, ...rest }: DatePickerYearSelectProps = $props();
const styles = useCalendar();
const slots = $derived(styles.slots);
const surfaceVariant = useFormControlSurface();
const selectClassName = $derived(
  cn(
    formControlShellRecipe({ size: "md", surfaceVariant, variant: "primary" }),
    slots.select(),
    className,
  ),
);
</script>

<div
  class={slots.selectWrapper()}
  data-part="year-select-wrapper"
  data-scope="calendar"
>
  <CalendarPrimitive.YearSelect
    {...rest}
    class={selectClassName}
    data-variant="primary"
  />
  <CaretDownIcon
    class={slots.selectIcon()}
    data-part="year-select-icon"
    data-scope="calendar"
  />
</div>
