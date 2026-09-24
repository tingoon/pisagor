<script lang="ts">
import type { FieldTextareaProps } from "@ark-ui/svelte/field";
import { Field } from "@ark-ui/svelte/field";
import { formControlShellRecipe } from "@pisagor/recipes/form-control";
import { type TextareaRecipeSlot, textareaRecipe } from "@pisagor/recipes/textarea";
import { cn } from "@pisagor/utils";
import InputClearButton from "../input/input-clear-button.svelte";
import InputGroupAddon from "../input-group/input-group-addon.svelte";
import InputGroupRoot from "../input-group/input-group-root.svelte";
import { useFormControlSurface } from "../surface/use-form-control-surface";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<FieldTextareaProps, "class"> & {
  /**
   * Whether to show a clear button when the textarea has a value.
   * @defaultValue false
   */
  clearable?: boolean;
  class?: string | undefined;
  classNames?: Partial<Record<TextareaRecipeSlot, string>>;
  /** Called with the string value when the textarea changes. */
  onValueChange?: (value: string) => void;
  recipe?: typeof textareaRecipe;
  /** Visual shell variant. Defaults to `primary`. */
  variant?: FormControlVariant;
};

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
const canClear = $derived(clearable && !disabled && !readonly && String(value ?? "").length > 0);

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
  <InputGroupRoot class={slots.group({ class: cn(classNames?.group) })} {variant}>
    <Field.Textarea
      {...rest}
      class={slots.clearableRoot({
  class: cn(canClear && "pe-9", className, classNames?.clearableRoot),
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
