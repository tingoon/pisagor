<script lang="ts">
import { Checkbox, Field } from "@pisagor/svelte";
import type { ComponentProps, Snippet } from "svelte";

type CheckboxProps = ComponentProps<typeof Checkbox>;

type Props = Omit<
  CheckboxProps,
  | "checked"
  | "invalid"
  | "name"
  | "onCheckedChange"
  | "onValueChange"
  | "children"
> & {
  checked?: boolean | undefined;
  class?: string | undefined;
  description?: string | undefined;
  error?: string | undefined;
  id?: string | undefined;
  invalid?: boolean | undefined;
  label?: string | undefined;
  labelAccessory?: Snippet | undefined;
  labelProps?: ComponentProps<typeof Field.Label> | undefined;
  name?: string | undefined;
  onBlur?: (() => void) | undefined;
  onValueChange?: ((checked: boolean) => void) | undefined;
  orientation?: "horizontal" | "vertical" | "responsive" | undefined;
};

let {
  checked = $bindable<boolean | undefined>(undefined),
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
  orientation = "horizontal",
  ...checkboxProps
}: Props = $props();

const hasLabel = $derived(Boolean(label ?? labelAccessory));
</script>

<Field class={className} {invalid} {orientation}>
  <Checkbox
    {...checkboxProps}
    {checked}
    {id}
    {invalid}
    {name}
    onblur={onBlur}
    {onValueChange}
  />
  {#if hasLabel || description}
    <Field.Content>
      {#if hasLabel}
        <Field.Label {...labelProps} for={id}>
          {label}
          {#if labelAccessory}
            {@render labelAccessory()}
          {/if}
        </Field.Label>
      {/if}
      {#if description}
        <Field.Description>{description}</Field.Description>
      {/if}
    </Field.Content>
  {/if}
  {#if error}
    <Field.Error>{error}</Field.Error>
  {/if}
</Field>
