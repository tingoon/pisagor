<script lang="ts">
import type { DatePickerTriggerProps as ArkTriggerProps } from "@ark-ui/svelte/date-picker";
import { DatePicker as DatePickerPrimitive } from "@ark-ui/svelte/date-picker";
import { cn } from "@pisagor/utils";
import { useDatePicker } from "./date-picker.context";
import DatePickerClearTrigger from "./date-picker-clear-trigger.svelte";

type Props = Omit<ArkTriggerProps, "class"> & {
  class?: string | undefined;
  clearable?: boolean;
};

let { clearable = false, children, class: className, ...rest }: Props = $props();
const ctx = useDatePicker();
const slots = $derived(ctx?.slots);
</script>

{#if slots}
  <DatePickerPrimitive.Control class={slots.control()}>
    <DatePickerPrimitive.Trigger {...rest} class={slots.trigger({ class: cn(className) })}>
      {@render children?.()}
    </DatePickerPrimitive.Trigger>
    {#if clearable}
      <DatePickerClearTrigger />
    {/if}
  </DatePickerPrimitive.Control>
{/if}
