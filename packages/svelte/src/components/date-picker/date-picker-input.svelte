<script lang="ts">
import type { DatePickerInputProps as ArkInputProps } from "@ark-ui/svelte/date-picker";
import { DatePicker as DatePickerPrimitive } from "@ark-ui/svelte/date-picker";
import { buttonRecipe } from "@pisagor/recipes/button";
import {
  type FormControlGroupShellVariantProps,
  formControlGroupShellRecipe,
} from "@pisagor/recipes/form-control";
import { inputGroupControlRecipe } from "@pisagor/recipes/input-group";
import { cn } from "@pisagor/utils";
import CalendarIcon from "phosphor-svelte/lib/CalendarIcon";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { useDatePicker } from "./date-picker.context";
import DatePickerClearTrigger from "./date-picker-clear-trigger.svelte";

type Props = Omit<ArkInputProps, "class" | "size"> &
  FormControlGroupShellVariantProps & {
    class?: string | undefined;
    clearable?: boolean;
  };

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
const variant = $derived(variantProp ?? ("primary" as const));
</script>

{#if slots}
  <DatePickerPrimitive.Control>
    <div
      class={cn(formControlGroupShellRecipe({ size, surfaceVariant, variant }), "group/input-group", className)}
      data-part="root"
      data-scope="input-group"
    >
      <DatePickerPrimitive.Input {...rest} class={inputGroupControlRecipe()} />
      <div class="ms-auto flex items-center gap-0.5 pe-1" data-align="inline-end">
        {#if clearable}
          <DatePickerClearTrigger />
        {/if}
        <DatePickerPrimitive.Trigger
          aria-label="Open calendar"
          class={cn(buttonRecipe({ size: "icon-xs", variant: "ghost" }).base())}
          type="button"
        >
          <CalendarIcon aria-hidden="true" class={slots.icon()} />
        </DatePickerPrimitive.Trigger>
      </div>
    </div>
  </DatePickerPrimitive.Control>
{/if}
