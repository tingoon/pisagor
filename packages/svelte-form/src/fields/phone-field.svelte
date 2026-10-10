<script lang="ts">
import { PhoneInput } from "@pisagor/svelte/phone-input";
import type { ComponentProps, Snippet } from "svelte";
import FieldShell from "../internal/field-shell.svelte";

type PhoneInputProps = ComponentProps<typeof PhoneInput>;

type Props = Omit<
  PhoneInputProps,
  "name" | "onBlur" | "onChange" | "value" | "children"
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
  onValueChange?: ((value: string) => void) | undefined;
  orientation?: ComponentProps<typeof FieldShell>["orientation"];
  value?: string | undefined;
};

let {
  class: className,
  defaultCountry,
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
  value,
  ...phoneInputProps
}: Props = $props();
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
  <PhoneInput
    {...phoneInputProps}
    {defaultCountry}
    {id}
    {invalid}
    {name}
    {onBlur}
    onChange={onValueChange}
    {value}
  />
</FieldShell>
