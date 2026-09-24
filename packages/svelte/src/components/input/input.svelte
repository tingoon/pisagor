<script lang="ts">
import type { FieldInputProps } from "@ark-ui/svelte/field";
import { Field } from "@ark-ui/svelte/field";
import {
  type InputRecipeSlot,
  type InputRootVariantProps,
  inputRecipe,
  inputRootRecipe,
} from "@pisagor/recipes/input";
import { cn } from "@pisagor/utils";
import InputGroupRoot from "../input-group/input-group-root.svelte";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import InputClearAddon from "./input-clear-addon.svelte";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<FieldInputProps, "class" | "size"> &
  InputRootVariantProps & {
    /**
     * Whether to show a clear button when the input has a value.
     * @defaultValue false
     */
    clearable?: boolean;
    class?: string | undefined;
    classNames?: Partial<Record<InputRecipeSlot, string>>;
    /** Called with the string value when the input changes. */
    onValueChange?: (value: string) => void;
    recipe?: typeof inputRecipe;
    rootRecipe?: typeof inputRootRecipe;
  };

let {
  size = "md",
  variant: variantProp,
  clearable = false,
  disabled,
  readonly,
  type = "text",
  value = $bindable<string | number | undefined>(undefined),
  oninput,
  onValueChange,
  recipe = inputRecipe,
  rootRecipe = inputRootRecipe,
  class: className,
  classNames,
  ...rest
}: Props = $props();

const surfaceVariant = useFormControlSurface();
const variant = $derived(variantProp ?? ("primary" as FormControlVariant));
const slots = $derived(recipe());

const skipClearable = $derived(!clearable || type === "file" || type === "password");
const canClear = $derived(
  !skipClearable && !disabled && !readonly && String(value ?? "").length > 0,
);

function handleInput(event: Event & { currentTarget: HTMLInputElement }) {
  const next = event.currentTarget.value;
  value = next;
  onValueChange?.(next);
  oninput?.(event as never);
}

function handleClear() {
  value = "";
  onValueChange?.("");
}
</script>

{#if skipClearable}
  <Field.Input
    {...rest}
    class={rootRecipe({ class: cn(className), size, surfaceVariant, variant })}
    data-size={size}
    data-variant={variant}
    {disabled}
    oninput={handleInput}
    {readonly}
    {type}
    bind:value
  />
{:else}
  <InputGroupRoot {size} {variant}>
    <Field.Input
      {...rest}
      class={slots.clearableRoot({ class: cn(className, classNames?.clearableRoot) })}
      data-size={size}
      {disabled}
      oninput={handleInput}
      {readonly}
      {type}
      bind:value
    />
    {#if canClear}
      <InputClearAddon onClear={handleClear} />
    {/if}
  </InputGroupRoot>
{/if}
