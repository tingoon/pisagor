<script lang="ts">
import {
  DatePicker as DatePickerPrimitive,
  type DatePickerValueTextProps,
} from "@ark-ui/svelte/date-picker";
import { cn } from "@pisagor/utils";
import { useDatePicker } from "./date-picker.context";

let { class: className, ...rest }: DatePickerValueTextProps = $props();
const ctx = useDatePicker();
const slots = $derived(ctx?.slots);
</script>

{#if slots}
  <DatePickerPrimitive.ValueText
    {...rest}
    class={slots.valueText({ class: cn(className) })}
  />
{/if}
