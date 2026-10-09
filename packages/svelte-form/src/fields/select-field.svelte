<script lang="ts">
import { Select } from "@pisagor/svelte";
import type { ComponentProps, Snippet } from "svelte";
import FieldShell from "../internal/field-shell.svelte";

type SelectProps = ComponentProps<typeof Select>;

interface SelectOption {
  label: string;
  value: string;
}

type Props = Omit<
  SelectProps,
  | "children"
  | "collection"
  | "invalid"
  | "name"
  | "onValueChange"
  | "value"
  | "items"
> & {
  class?: string | undefined;
  description?: string | undefined;
  error?: string | undefined;
  id?: string | undefined;
  invalid?: boolean | undefined;
  items: Array<SelectOption | string>;
  label?: string | undefined;
  labelAccessory?: Snippet | undefined;
  labelProps?: ComponentProps<typeof FieldShell>["labelProps"];
  name?: string | undefined;
  onBlur?: (() => void) | undefined;
  onValueChange?: ((value: string) => void) | undefined;
  orientation?: ComponentProps<typeof FieldShell>["orientation"];
  placeholder?: string | undefined;
  value?: string | undefined;
};

let {
  class: className,
  description,
  error,
  id,
  invalid,
  items,
  label,
  labelAccessory,
  labelProps,
  name,
  onBlur,
  onValueChange,
  orientation,
  placeholder = "Select an option",
  value,
  ...selectProps
}: Props = $props();

const selectValue = $derived(
  value !== undefined ? (value ? [value] : []) : undefined,
);

function handleValueChange(nextValue: string[] | string) {
  onValueChange?.(
    Array.isArray(nextValue) ? (nextValue.at(0) ?? "") : nextValue,
  );
}
</script>

<FieldShell
  class={className}
  {description}
  {error}
  {id}
  {invalid}
  {label}
  {labelAccessory}
  {labelProps}
  {orientation}
>
  <Select
    {...selectProps}
    {id}
    {invalid}
    {items}
    {name}
    onFocusOutside={onBlur}
    onValueChange={handleValueChange}
    {placeholder}
    value={selectValue}
  />
</FieldShell>
