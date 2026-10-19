<script lang="ts">
  import type { DatePickerRootContract } from "@pisagor/contracts";
  import { datePickerRecipe, inputGroupControlRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { ClockIcon } from "phosphor-svelte";
  import type { Snippet } from "svelte";
  import type { HTMLInputAttributes } from "svelte/elements";
  import InputClearButton from "../input/input-clear-button.svelte";
  import { InputGroup } from "../input-group";
  import { useDatePicker } from "./date-picker.context";

  type Props = Omit<HTMLInputAttributes, "size" | "type" | "value"> & {
    children?: Snippet;
    clearable?: boolean;
    size?: "sm" | "md" | "lg";
    value?: string | undefined;
    variant?: "primary" | "secondary";
  } & DatePickerRootContract;

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
  const variant = $derived(variantProp ?? ctx?.variant);
  const canClear = $derived(
    clearable &&
      !disabled &&
      !readonly &&
      Boolean(value && String(value).length > 0),
  );

  function handleClear() {
    value = "";
  }
</script>

<InputGroup {size} {variant}>
  <InputGroup.Addon>
    <ClockIcon />
  </InputGroup.Addon>
  <input
    {...rest}
    class={cn(inputGroupControlRecipe(), slots.timer({ class: cn(className) }))}
    {disabled}
    {oninput}
    {readonly}
    step="1"
    type="time"
    bind:value
  />
  {#if canClear}
    <InputGroup.Addon align="inline-end">
      <InputClearButton onClear={handleClear} />
    </InputGroup.Addon>
  {/if}
</InputGroup>
