<script lang="ts">
  import {
    DatePicker as DatePickerPrimitive,
    type DatePickerTriggerProps as ArkTriggerProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { isInsideControl, setInsideControl } from "../../internal";
  import {
    DATE_PICKER_INSIDE_CONTROL,
    useDatePicker,
  } from "./date-picker.context";
  import DatePickerClearTrigger from "./date-picker-clear-trigger.svelte";

  type Props = ArkTriggerProps & { clearable?: boolean };

  let {
    clearable = false,
    children,
    class: className,
    ...rest
  }: Props = $props();
  const ctx = useDatePicker();
  const slots = $derived(ctx?.slots);
  const insideControl = isInsideControl(DATE_PICKER_INSIDE_CONTROL);
  if (!insideControl) setInsideControl(DATE_PICKER_INSIDE_CONTROL);
</script>

{#if slots}
  {#snippet body()}
    <DatePickerPrimitive.Trigger
      {...rest}
      class={slots.trigger({ class: cn(className) })}
    >
      {@render children?.()}
    </DatePickerPrimitive.Trigger>
    {#if clearable}
      <DatePickerClearTrigger />
    {/if}
  {/snippet}
  {#if insideControl}
    {@render body()}
  {:else}
    <DatePickerPrimitive.Control class={slots.control()}>
      {@render body()}
    </DatePickerPrimitive.Control>
  {/if}
{/if}
