<script lang="ts">
import { PasswordInput } from "@pisagor/svelte";
import type { ComponentProps, Snippet } from "svelte";
import FieldShell from "../internal/field-shell.svelte";

type PasswordInputProps = ComponentProps<typeof PasswordInput>;

type Props = Omit<
  PasswordInputProps,
  "name" | "onblur" | "onValueChange" | "value" | "children"
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
  value = $bindable<string | undefined>(undefined),
  ...passwordInputProps
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
  <PasswordInput
    {...passwordInputProps}
    {id}
    {invalid}
    {name}
    onblur={onBlur}
    {onValueChange}
    bind:value
  />
</FieldShell>
