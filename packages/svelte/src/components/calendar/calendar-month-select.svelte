<script lang="ts">
import type { DatePickerMonthSelectProps } from "@ark-ui/svelte/date-picker";
import { DatePicker as CalendarPrimitive } from "@ark-ui/svelte/date-picker";
import { formControlShellRecipe } from "@pisagor/recipes/form-control";
import { cn } from "@pisagor/utils";
import CaretDownIcon from "phosphor-svelte/lib/CaretDownIcon";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { useCalendar } from "./calendar.context";

type Props = Omit<DatePickerMonthSelectProps, "class"> & { class?: string | undefined };

let { class: className, ...rest }: Props = $props();
const { slots } = useCalendar();
const surfaceVariant = useFormControlSurface();
const selectClassName = $derived(
  cn(
    formControlShellRecipe({ size: "md", surfaceVariant, variant: "primary" }),
    slots.select(),
    className,
  ),
);
</script>

<div class={slots.selectWrapper()} data-part="month-select-wrapper" data-scope="calendar">
  <CalendarPrimitive.MonthSelect {...rest} class={selectClassName} data-variant="primary" />
  <CaretDownIcon class={slots.selectIcon()} data-part="month-select-icon" data-scope="calendar" />
</div>
