<script lang="ts">
import { Field, type FieldTextareaProps } from "@ark-ui/svelte/field";
import type { TextareaProps as BaseTextareaProps } from "@pisagor/props";
import {
  formControlShellRecipe,
  type TextareaRecipeSlot,
  textareaRecipe,
} from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import type { VariantClassNames } from "../internal/types";
import InputClearButton from "./input/input-clear-button.svelte";
import InputGroupAddon from "./input-group/input-group-addon.svelte";
import InputGroupRoot from "./input-group/input-group-root.svelte";
import { useFormControlSurface } from "./surface/use-form-control-surface";

type FormControlVariant = "primary" | "secondary";

type Props = FieldTextareaProps & {
  /**
   * Whether to show a clear button when the textarea has a value.
   * @defaultValue false
   */
  clearable?: boolean;
  classNames?: VariantClassNames<TextareaRecipeSlot>;
  /** Called with the string value when the textarea changes. */
  onValueChange?: (value: string) => void;
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
} & BaseTextareaProps;

let {
  variant: variantProp,
  clearable = false,
  disabled,
  readonly,
  value = $bindable<string | undefined>(undefined),
  oninput,
  onValueChange,
  recipe = textareaRecipe,
  class: className,
  classNames,
  ...rest
}: Props = $props();

const surfaceVariant = useFormControlSurface();
const variant = $derived(variantProp ?? ("primary" as FormControlVariant));
const slots = $derived(recipe());
const canClear = $derived(
  clearable && !disabled && !readonly && String(value ?? "").length > 0,
);

function handleInput(event: Event & { currentTarget: HTMLTextAreaElement }) {
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

{#if !clearable}
  <Field.Textarea
    {...rest}
    class={cn(
      formControlShellRecipe({ size: "md", surfaceVariant, variant }),
      slots.rootLayout({ class: cn(className, classNames?.rootLayout) }),
    )}
    data-variant={variant}
    {disabled}
    oninput={handleInput}
    {readonly}
    bind:value
  />
{:else}
  <InputGroupRoot class={slots.group({ class: classNames?.group })} {variant}>
    <Field.Textarea
      {...rest}
      class={slots.clearableRoot({
        class: cn(className, classNames?.clearableRoot),
        clearable: canClear,
      })}
      data-variant={variant}
      {disabled}
      oninput={handleInput}
      {readonly}
      bind:value
    />
    {#if canClear}
      <InputGroupAddon align="inline-end" class={slots.clearAddon()}>
        <InputClearButton onClear={handleClear} />
      </InputGroupAddon>
    {/if}
  </InputGroupRoot>
{/if}
