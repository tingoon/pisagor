<script lang="ts">
import { Textarea } from "@pisagor/svelte/textarea";
import type { ComponentProps, Snippet } from "svelte";
import FieldShell from "../../internal/field-shell.svelte";

type TextareaProps = ComponentProps<typeof Textarea>;

type Props = Omit<
  TextareaProps,
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
  ...textareaProps
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
  <Textarea
    {...textareaProps}
    {id}
    {name}
    onblur={onBlur}
    {onValueChange}
    bind:value
  />
</FieldShell>
