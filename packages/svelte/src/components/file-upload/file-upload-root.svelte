<script lang="ts">
import {
  type FileUploadRootProps as ArkRootProps,
  FileUpload as FileUploadPrimitive,
} from "@ark-ui/svelte/file-upload";
import type { FileUploadProps as BaseFileUploadProps } from "@pisagor/props";
import { fileUploadRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { setFileUploadContext } from "./file-upload.context";

type Props = ArkRootProps & {
  onValueChange?: (value: globalThis.File[]) => void;
} & BaseFileUploadProps;

let {
  children,
  onFileChange,
  onValueChange,
  recipe = fileUploadRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
setFileUploadContext({
  get slots() {
    return slots;
  },
});

function handleFileChange(
  details: Parameters<NonNullable<Props["onFileChange"]>>[0],
) {
  onFileChange?.(details);
  onValueChange?.(details.acceptedFiles);
}
</script>

<FileUploadPrimitive.Root
  {...rest}
  class={slots.base({ class: cn(className) })}
  onFileChange={handleFileChange}
>
  {@render children?.()}
  <FileUploadPrimitive.HiddenInput />
</FileUploadPrimitive.Root>
