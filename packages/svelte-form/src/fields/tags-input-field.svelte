<script lang="ts">
import { TagsInput } from "@pisagor/svelte";
import type { ComponentProps, Snippet } from "svelte";
import FieldShell from "../internal/field-shell.svelte";

type TagsInputProps = ComponentProps<typeof TagsInput>;

type Props = Omit<TagsInputProps, "invalid" | "name" | "children"> & {
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
  orientation?: ComponentProps<typeof FieldShell>["orientation"];
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
  value,
  ...tagsInputProps
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
  <TagsInput
    {...tagsInputProps}
    {id}
    {invalid}
    {name}
    onblur={onBlur}
    {onValueChange}
    {value}
  />
</FieldShell>
