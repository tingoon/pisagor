<script lang="ts">
  import {
    type DatePickerInputProps as ArkInputProps,
    DatePicker as DatePickerPrimitive,
  } from "@ark-ui/svelte/date-picker";
  import {
    buttonRecipe,
    type FormControlGroupShellVariantProps,
    formControlGroupShellRecipe,
    inputGroupControlRecipe,
  } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import CalendarIcon from "phosphor-svelte/lib/CalendarIcon";
  import {
    isInsideControl,
    setInsideControl,
  } from "../../internal/inside-control";
  import { useMessageResolver } from "../provider/context";
  import { useFormControlSurface } from "../surface/use-form-control-surface";
  import {
    DATE_PICKER_INSIDE_CONTROL,
    useDatePicker,
  } from "./date-picker.context";
  import DatePickerClearTrigger from "./date-picker-clear-trigger.svelte";

  const t = useMessageResolver();

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
  const surfaceVariant = useFormControlSurface();
  const insideControl = isInsideControl(DATE_PICKER_INSIDE_CONTROL);
  if (!insideControl) setInsideControl(DATE_PICKER_INSIDE_CONTROL);
  const variant = $derived(variantProp ?? ctx?.variant ?? ("primary" as const));
</script>

{#if slots}
  {#snippet body()}
    <div
      class={cn(
        formControlGroupShellRecipe({ size, surfaceVariant, variant }),
        "group/input-group",
        className,
      )}
      data-part="root"
      data-scope="input-group"
    >
      <DatePickerPrimitive.Input {...rest} class={inputGroupControlRecipe()} />
      <div
        class="ms-auto flex items-center gap-0.5 pe-1"
        data-align="inline-end"
      >
        {#if clearable}
          <DatePickerClearTrigger />
        {/if}
        <DatePickerPrimitive.Trigger
          aria-label={t("datePicker.openCalendar")}
          class={buttonRecipe({ size: "icon-xs", variant: "ghost" }).base()}
          type="button"
        >
          <CalendarIcon aria-hidden="true" class={slots.icon()} />
        </DatePickerPrimitive.Trigger>
      </div>
    </div>
  {/snippet}
  {#if insideControl}
    {@render body()}
  {:else}
    <DatePickerPrimitive.Control>{@render body()}</DatePickerPrimitive.Control>
  {/if}
{/if}
