<script lang="ts">
import {
  type FileUploadItemProps,
  FileUpload as FileUploadPrimitive,
} from "@ark-ui/svelte/file-upload";
import type { FileUploadItemProps as BaseFileUploadItemProps } from "@pisagor/props";
import { fileUploadItemRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { FileUploadItemStylesContext } from "./file-upload.context";

type Props = FileUploadItemProps & BaseFileUploadItemProps;

let {
  children,
  recipe = fileUploadItemRecipe,
  class: className,
  ...rest
}: Props = $props();

const slots = $derived(recipe());
FileUploadItemStylesContext.set({
  get slots() {
    return slots;
  },
});
</script>

<FileUploadPrimitive.Item
  {...rest}
  class={slots.base({ class: cn(className) })}
>
  {@render children?.()}
</FileUploadPrimitive.Item>
