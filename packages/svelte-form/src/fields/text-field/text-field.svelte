<script lang="ts">
import { Input } from "@pisagor/svelte/input";
import type { ComponentProps, Snippet } from "svelte";
import FieldShell from "../../internal/field-shell.svelte";

type InputProps = ComponentProps<typeof Input>;

type Props = Omit<
  InputProps,
  "name" | "onblur" | "oninput" | "onValueChange" | "value" | "children"
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
  ...inputProps
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
  <Input
    {...inputProps}
    {id}
    {name}
    onblur={onBlur}
    {onValueChange}
    bind:value
  />
</FieldShell>
