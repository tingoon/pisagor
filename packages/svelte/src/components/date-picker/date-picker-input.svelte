<script lang="ts">
  import {
    DatePicker as DatePickerPrimitive,
    type DatePickerInputProps as ArkInputProps,
  } from "@ark-ui/svelte";
  import type { FormControlGroupShellVariantProps } from "@pisagor/recipes";
  import { CalendarIcon } from "phosphor-svelte";
  import { isInsideControl, setInsideControl } from "../../internal";
  import Button from "../button.svelte";
  import { InputGroup } from "../input-group";
  import { useLocale } from "../provider/context";
  import {
    DATE_PICKER_INSIDE_CONTROL,
    useDatePicker,
  } from "./date-picker.context";
  import DatePickerClearTrigger from "./date-picker-clear-trigger.svelte";

  const { m } = useLocale();

  type Props = Omit<ArkInputProps, "size"> &
    FormControlGroupShellVariantProps & { clearable?: boolean };

  let {
    size = "md",
    variant: variantProp,
    clearable = false,
    class: className,
    ...rest
  }: Props = $props();

  const ctx = useDatePicker();
  const slots = $derived(ctx?.slots);
  const insideControl = isInsideControl(DATE_PICKER_INSIDE_CONTROL);
  if (!insideControl) setInsideControl(DATE_PICKER_INSIDE_CONTROL);
  const variant = $derived(variantProp ?? ctx?.variant);
</script>

{#if slots}
  {#snippet body()}
    <InputGroup class={className} {size} {variant}>
      <DatePickerPrimitive.Input {...rest}>
        {#snippet asChild(props)}
          <InputGroup.Input {...props()} clearable={false} />
        {/snippet}
      </DatePickerPrimitive.Input>
      <InputGroup.Addon align="inline-end">
        {#if clearable}
          <DatePickerClearTrigger />
        {/if}
        <DatePickerPrimitive.Trigger>
          {#snippet asChild(props)}
            <Button
              {...props()}
              aria-label={m("datePicker.openCalendar")}
              size="icon-md"
              variant="ghost"
            >
              <CalendarIcon aria-hidden="true" class={slots.icon()} />
            </Button>
          {/snippet}
        </DatePickerPrimitive.Trigger>
      </InputGroup.Addon>
    </InputGroup>
  {/snippet}
  {#if insideControl}
    {@render body()}
  {:else}
    <DatePickerPrimitive.Control>{@render body()}</DatePickerPrimitive.Control>
  {/if}
{/if}
