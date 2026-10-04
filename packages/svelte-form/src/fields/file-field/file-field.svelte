<script lang="ts">
import { FileInput } from "@pisagor/svelte";
import type { ComponentProps, Snippet } from "svelte";
import FieldShell from "../../internal/field-shell.svelte";

type FileInputProps = ComponentProps<typeof FileInput>;

type Props = Omit<
  FileInputProps,
  "invalid" | "name" | "onFilesChange" | "onValueChange" | "children"
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
  onValueChange?: ((files: File[]) => void) | undefined;
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
  ...fileInputProps
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
  <FileInput
    {...fileInputProps}
    {id}
    {invalid}
    {name}
    onblur={onBlur}
    {onValueChange}
  />
</FieldShell>
