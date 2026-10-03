<script lang="ts">
import { RichTextEditor } from "@pisagor/svelte/rich-text-editor";
import type { ComponentProps, Snippet } from "svelte";
import FieldShell from "../../internal/field-shell.svelte";

type RichTextEditorProps = ComponentProps<typeof RichTextEditor>;

type Props = Omit<
  RichTextEditorProps,
  "onBlur" | "onChange" | "value" | "children" | "onValueChange"
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
  "aria-label": ariaLabel,
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
  ...editorProps
}: Props = $props();

const hasVisibleLabel = $derived(Boolean(label || labelAccessory));
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
  <RichTextEditor
    {...editorProps}
    aria-label={hasVisibleLabel ? ariaLabel : (ariaLabel ?? "Rich text editor")}
    {id}
    {invalid}
    {name}
    {onBlur}
    {onValueChange}
    {value}
  />
</FieldShell>
