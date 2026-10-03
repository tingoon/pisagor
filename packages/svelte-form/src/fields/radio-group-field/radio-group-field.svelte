<script lang="ts">
import { Field } from "@pisagor/svelte/field";
import { RadioGroup } from "@pisagor/svelte/radio-group";
import type { ComponentProps, Snippet } from "svelte";

type RadioGroupRootProps = ComponentProps<typeof RadioGroup.Root>;

interface RadioGroupOption {
  description?: string;
  label: string;
  value: string;
}

type Props = Omit<
  RadioGroupRootProps,
  "invalid" | "name" | "onValueChange" | "value" | "children"
> & {
  class?: string | undefined;
  description?: string | undefined;
  error?: string | undefined;
  id?: string | undefined;
  invalid?: boolean | undefined;
  label?: string | undefined;
  labelAccessory?: Snippet | undefined;
  labelProps?: { class?: string | undefined } | undefined;
  name?: string | undefined;
  onBlur?: (() => void) | undefined;
  onValueChange?: ((value: string) => void) | undefined;
  options: Array<RadioGroupOption | string>;
  orientation?: RadioGroupRootProps["orientation"];
  value?: string | undefined;
};

let {
  class: className,
  description,
  error,
  id,
  invalid,
  label,
  labelAccessory,
  labelProps,
  name,
  onBlur,
  onValueChange,
  options,
  orientation,
  value,
  ...radioGroupProps
}: Props = $props();

const normalizedOptions = $derived(
  options.map((option) =>
    typeof option === "string" ? { label: option, value: option } : option,
  ),
);
const hasLabel = $derived(Boolean(label ?? labelAccessory));
const radioValue = $derived(value !== undefined ? value || null : undefined);

function handleValueChange(nextValue: string | null) {
  onValueChange?.(nextValue ?? "");
}
</script>

<Field.Set class={className} data-invalid={invalid || undefined} {invalid}>
  {#if hasLabel}
    <Field.Legend class={labelProps?.class} {id} variant="label">
      {label}
      {#if labelAccessory}
        {@render labelAccessory()}
      {/if}
    </Field.Legend>
  {/if}
  {#if description}
    <Field.Description>{description}</Field.Description>
  {/if}
  <RadioGroup.Root
    {...radioGroupProps}
    aria-labelledby={hasLabel && id ? id : undefined}
    {invalid}
    {name}
    onblur={onBlur}
    onValueChange={handleValueChange}
    {orientation}
    value={radioValue}
  >
    {#each normalizedOptions as option (option.value)}
      {#if option.description}
        <Field>
          <RadioGroup.Item
            id={id ? `${id}-${option.value}` : undefined}
            value={option.value}
          >
            {option.label}
          </RadioGroup.Item>
          <Field.Description>{option.description}</Field.Description>
        </Field>
      {:else}
        <RadioGroup.Item
          id={id ? `${id}-${option.value}` : undefined}
          value={option.value}
        >
          {option.label}
        </RadioGroup.Item>
      {/if}
    {/each}
  </RadioGroup.Root>
  {#if error}
    <Field {invalid}>
      <Field.Error>{error}</Field.Error>
    </Field>
  {/if}
</Field.Set>
