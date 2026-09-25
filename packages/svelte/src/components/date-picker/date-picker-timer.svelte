<script lang="ts">
import { datePickerRecipe } from "@pisagor/recipes/date-picker";
import {
  type FormControlGroupShellVariantProps,
  formControlGroupShellRecipe,
} from "@pisagor/recipes/form-control";
import { inputGroupControlRecipe } from "@pisagor/recipes/input-group";
import { cn } from "@pisagor/utils";
import ClockIcon from "phosphor-svelte/lib/ClockIcon";
import type { Snippet } from "svelte";
import type { HTMLInputAttributes } from "svelte/elements";
import InputClearButton from "../input/input-clear-button.svelte";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { useDatePicker } from "./date-picker.context";

type Props = Omit<HTMLInputAttributes, "class" | "size" | "type" | "value"> &
  FormControlGroupShellVariantProps & {
    children?: Snippet;
    class?: string | undefined;
    clearable?: boolean;
    recipe?: typeof datePickerRecipe;
    value?: string | undefined;
  };

let {
  clearable = false,
  size = "md",
  variant: variantProp,
  class: className,
  disabled,
  readonly,
  value = $bindable(""),
  recipe = datePickerRecipe,
  oninput,
  ...rest
}: Props = $props();

const ctx = useDatePicker();
const slots = $derived(ctx?.slots ?? recipe());
const surfaceVariant = useFormControlSurface();
const variant = $derived(variantProp ?? ("primary" as const));
const canClear = $derived(
  clearable && !disabled && !readonly && Boolean(value && String(value).length > 0),
);

function handleClear() {
  value = "";
}
</script>

<div
  class={cn(formControlGroupShellRecipe({ size, surfaceVariant, variant }), "group/input-group")}
  data-part="root"
  data-scope="input-group"
>
  <div class="ps-2" data-align="inline-start">
    <ClockIcon />
  </div>
  <input
    {...rest}
    class={cn(inputGroupControlRecipe(), slots.timer({ class: cn(className) }))}
    {disabled}
    {oninput}
    {readonly}
    step="1"
    type="time"
    bind:value
  >
  {#if canClear}
    <div class="pe-1" data-align="inline-end">
      <InputClearButton onClear={handleClear} />
    </div>
  {/if}
</div>
