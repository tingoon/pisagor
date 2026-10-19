<script lang="ts">
  import type { FileInputRootContract } from "@pisagor/contracts";
  import type { HTMLInputAttributes } from "svelte/elements";
  import { InputGroup } from "../input-group";
  import { useLocale } from "../provider/context";
  import FileInputControl from "./file-input-control.svelte";
  import FileInputLabel from "./file-input-label.svelte";
  import FileInputRoot from "./file-input-root.svelte";

  const { m } = useLocale();

  type Props = Omit<
    HTMLInputAttributes,
    "defaultValue" | "onChange" | "size" | "type" | "value"
  > &
    FileInputRootContract & {
      browseLabel?: string;
      invalid?: boolean;
      onFilesChange?: (files: globalThis.File[]) => void;
      placeholder?: string;
    };

  let {
    size = "md",
    variant,
    accept,
    disabled,
    invalid,
    multiple,
    name,
    required,
    browseLabel: browseLabelProp,
    capture,
    id,
    placeholder: placeholderProp,
    onchange,
    onFilesChange,
    recipe,
    class: className,
    ...rest
  }: Props = $props();

  let inputEl = $state<HTMLInputElement | null>(null);
  let fileLabel = $state<string | undefined>(undefined);

  const placeholder = $derived(m("fileInput.placeholder", placeholderProp));
  const browseLabel = $derived(m("fileInput.browse", browseLabelProp));

  function formatFileLabel(files: globalThis.File[]): string | undefined {
    if (files.length === 0) return undefined;
    if (files.length === 1) return files[0]?.name;

    return `${files.length} files selected`;
  }

  function openPicker() {
    inputEl?.click();
  }

  function handleChange(event: Event & { currentTarget: HTMLInputElement }) {
    onchange?.(event as never);
    const files = event.currentTarget.files
      ? Array.from(event.currentTarget.files)
      : [];
    onFilesChange?.(files);
    fileLabel = formatFileLabel(files);
  }
</script>

<FileInputRoot
  class={className}
  disabled={disabled ?? undefined}
  {recipe}
  {size}
  {variant}
>
  <FileInputControl
    {...rest}
    {accept}
    aria-invalid={invalid || undefined}
    {capture}
    data-invalid={invalid || undefined}
    {disabled}
    {id}
    {multiple}
    {name}
    onchange={handleChange}
    {required}
    tabindex={-1}
    bind:element={inputEl}
  />
  <InputGroup.Addon align="inline-start">
    <InputGroup.Button {disabled} onclick={openPicker} type="button">
      {browseLabel}
    </InputGroup.Button>
  </InputGroup.Addon>
  <FileInputLabel onclick={disabled ? undefined : openPicker}>
    {fileLabel ?? placeholder}
  </FileInputLabel>
</FileInputRoot>
