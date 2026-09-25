<script lang="ts">
import type { DatePickerValueTextProps } from "@ark-ui/svelte/date-picker";
import { DatePicker as DatePickerPrimitive } from "@ark-ui/svelte/date-picker";
import { cn } from "@pisagor/utils";
import { useDatePicker } from "./date-picker.context";

type Props = Omit<DatePickerValueTextProps, "class"> & { class?: string | undefined };

let { class: className, ...rest }: Props = $props();
const ctx = useDatePicker();
const slots = $derived(ctx?.slots);
</script>

{#if slots}
  <DatePickerPrimitive.ValueText {...rest} class={slots.valueText({ class: cn(className) })} />
{/if}
