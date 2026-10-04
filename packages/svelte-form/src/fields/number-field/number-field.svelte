<script lang="ts">
import { NumberInput } from "@pisagor/svelte";
import type { ComponentProps, Snippet } from "svelte";
import FieldShell from "../../internal/field-shell.svelte";

type NumberInputProps = ComponentProps<typeof NumberInput>;

type Props = Omit<
  NumberInputProps,
  "invalid" | "name" | "value" | "onValueChange" | "children"
> & {
  class?: string | undefined;
  description?: string | undefined;
  error?: string | undefined;
  id?: string | undefined;
  invalid?: boolean | undefined;
  label?: string | undefined;
  labelAccessory?: Snippet | undefined;
  labelProps?: ComponentProps<typeof FieldShell>["labelProps"];
  name?: string | undefined;
  onBlur?: (() => void) | undefined;
  onValueChange?: ((value: number) => void) | undefined;
  orientation?: ComponentProps<typeof FieldShell>["orientation"];
  value?: number | undefined;
};

let {
  class: className,
  clearable = false,
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
  orientation,
  placeholder,
  value,
  ...numberInputProps
}: Props = $props();

const stringValue = $derived(
  value !== undefined
    ? Number.isFinite(value)
      ? String(value)
      : ""
    : undefined,
);
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
  <NumberInput
    {...numberInputProps}
    {clearable}
    {id}
    {invalid}
    {name}
    onblur={onBlur}
    {onValueChange}
    {placeholder}
    value={stringValue}
  />
</FieldShell>
