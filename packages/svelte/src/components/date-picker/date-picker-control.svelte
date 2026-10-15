<script lang="ts">
import {
  type DatePickerControlProps,
  DatePicker as DatePickerPrimitive,
} from "@ark-ui/svelte/date-picker";
import { cn } from "@pisagor/utils";
import { setInsideControl } from "../../internal/inside-control";
import {
  DATE_PICKER_INSIDE_CONTROL,
  useDatePicker,
} from "./date-picker.context";

let { children, class: className, ...rest }: DatePickerControlProps = $props();
const ctx = useDatePicker();
setInsideControl(DATE_PICKER_INSIDE_CONTROL);
</script>

<DatePickerPrimitive.Control
  {...rest}
  class={ctx?.slots
    ? ctx.slots.control({ class: cn(className) })
    : cn(className)}
>
  {@render children?.()}
</DatePickerPrimitive.Control>
