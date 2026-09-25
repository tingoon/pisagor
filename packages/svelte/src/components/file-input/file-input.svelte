<script lang="ts">
import { Ark } from "@ark-ui/svelte/factory";
import { fileInputRecipe } from "@pisagor/recipes/file-input";
import {
  type FormControlGroupShellVariantProps,
  formControlGroupShellRecipe,
} from "@pisagor/recipes/form-control";
import { cn } from "@pisagor/utils";
import type { HTMLInputAttributes } from "svelte/elements";
import { InputGroup } from "../input-group";
import { useFormControlSurface } from "../surface/use-form-control-surface";
import { setFileInputContext } from "./file-input.context";

type FormControlVariant = "primary" | "secondary";

type Props = Omit<
  HTMLInputAttributes,
  "class" | "defaultValue" | "onChange" | "size" | "type" | "value"
> &
  FormControlGroupShellVariantProps & {
    browseLabel?: string;
    class?: string | undefined;
    invalid?: boolean;
    onFilesChange?: (files: globalThis.File[]) => void;
    onValueChange?: (files: globalThis.File[]) => void;
    placeholder?: string;
    recipe?: typeof fileInputRecipe;
  };

let {
  size = "md",
  variant: variantProp,
  accept,
  disabled,
  invalid,
  multiple,
  name,
  required,
  browseLabel = "Choose file",
  capture,
  id,
  placeholder = "No file chosen",
  onchange,
  onFilesChange,
  onValueChange,
  recipe = fileInputRecipe,
  class: className,
  ...rest
}: Props = $props();

let inputEl = $state<HTMLInputElement | null>(null);
let fileLabel = $state<string | undefined>(undefined);

const slots = $derived(recipe());
const surfaceVariant = useFormControlSurface();
const variant = $derived(variantProp ?? ("primary" as FormControlVariant));

setFileInputContext({
  get slots() {
    return slots;
  },
});

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
  const files = event.currentTarget.files ? Array.from(event.currentTarget.files) : [];
  onFilesChange?.(files);
  onValueChange?.(files);
  fileLabel = formatFileLabel(files);
}
</script>

<Ark
  as="fieldset"
  class={formControlGroupShellRecipe({
  class: cn("m-0 min-w-0 border-solid p-0", className),
  size,
  surfaceVariant,
  variant,
})}
  data-disabled={disabled ? true : undefined}
  data-part="root"
  data-scope="file-input"
  data-size={size}
  data-variant={variant}
>
  <input
    {...rest}
    {accept}
    aria-invalid={invalid || undefined}
    {capture}
    class={slots.control()}
    data-invalid={invalid || undefined}
    data-part="control"
    data-scope="file-input"
    {disabled}
    {id}
    {multiple}
    {name}
    onchange={handleChange}
    {required}
    type="file"
    bind:this={inputEl}
  >
  <InputGroup.Addon align="inline-start">
    <InputGroup.Button {disabled} onclick={openPicker} type="button">
      {browseLabel}
    </InputGroup.Button>
  </InputGroup.Addon>
  <InputGroup.Text class={slots.label()} onclick={disabled ? undefined : openPicker}>
    {fileLabel ?? placeholder}
  </InputGroup.Text>
</Ark>
