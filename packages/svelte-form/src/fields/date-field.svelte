<script lang="ts">
  import { DatePicker } from "@pisagor/svelte";
  import type { ComponentProps, Snippet } from "svelte";
  import { FieldShell } from "../internal";

  type DatePickerProps = ComponentProps<typeof DatePicker>;

  type Props = Omit<
    DatePickerProps,
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
    onValueChange?: ((value: DatePickerProps["value"]) => void) | undefined;
    orientation?: ComponentProps<typeof FieldShell>["orientation"];
    placeholder?: string | undefined;
    value?: DatePickerProps["value"];
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
    orientation,
    placeholder = "Pick a date",
    value,
    ...datePickerProps
  }: Props = $props();

  function handleOpenChange(details: { open: boolean }) {
    if (!details.open) {
      onBlur?.();
    }
  }

  function handleValueChange(nextValue: DatePickerProps["value"]) {
    onValueChange?.(nextValue ?? []);
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
  <DatePicker
    {...datePickerProps}
    {invalid}
    {name}
    onOpenChange={handleOpenChange}
    onValueChange={handleValueChange}
    inputProps={{ id }}
    {placeholder}
    value={value !== undefined ? (value ?? []) : undefined}
  />
</FieldShell>
