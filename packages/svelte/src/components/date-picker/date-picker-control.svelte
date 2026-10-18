<script lang="ts">
  import {
    DatePicker as DatePickerPrimitive,
    type DatePickerControlProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { setInsideControl } from "../../internal";
  import {
    DATE_PICKER_INSIDE_CONTROL,
    useDatePicker,
  } from "./date-picker.context";

  let {
    children,
    class: className,
    ...rest
  }: DatePickerControlProps = $props();
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
