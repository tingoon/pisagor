<script lang="ts">
import type { FileUploadRootProps as ArkRootProps } from "@ark-ui/svelte/file-upload";
import { FileUpload as FileUploadPrimitive } from "@ark-ui/svelte/file-upload";
import type { FileUploadProps as BaseFileUploadProps } from "@pisagor/props";
import { fileUploadRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { setFileUploadContext } from "./file-upload.context";

type Props = Omit<ArkRootProps, "class"> &
  {
  class?: string | undefined;
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
</script>

<FileUploadPrimitive.Root
  {...rest}
  class={slots.base({ class: cn(className) })}
  onFileChange={(details) => {
  onFileChange?.(details);
  onValueChange?.(details.acceptedFiles);
}}
>
  {@render children?.()}
  <FileUploadPrimitive.HiddenInput />
</FileUploadPrimitive.Root>
