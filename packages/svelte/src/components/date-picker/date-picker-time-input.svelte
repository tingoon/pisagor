<script lang="ts">
  import type { DatePickerRootContract } from "@pisagor/contracts";
  import { datePickerRecipe, inputGroupControlRecipe } from "@pisagor/recipes";
  import { cn } from "@pisagor/utils";
  import { ClockIcon } from "phosphor-svelte";
  import type { Snippet } from "svelte";
  import type { HTMLInputAttributes } from "svelte/elements";
  import { InputGroup } from "../input-group";
  import { useDatePicker } from "./date-picker.context";

  type Props = Omit<HTMLInputAttributes, "size" | "type" | "value"> & {
    children?: Snippet;
    size?: "sm" | "md" | "lg";
    value?: string | undefined;
    variant?: "primary" | "secondary";
  } & DatePickerRootContract;

  let {
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
</InputGroup>
