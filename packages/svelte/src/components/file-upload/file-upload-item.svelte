<script lang="ts">
import type { FileUploadItemProps } from "@ark-ui/svelte/file-upload";
import { FileUpload as FileUploadPrimitive } from "@ark-ui/svelte/file-upload";
import type { FileUploadItemProps as BaseFileUploadItemProps } from "@pisagor/props";
import { fileUploadItemRecipe } from "@pisagor/recipes";
import { cn } from "@pisagor/utils";
import { setFileUploadItemContext } from "./file-upload.context";

type Props = Omit<FileUploadItemProps, "class"> &
  {
  class?: string | undefined;
  } & BaseFileUploadItemProps;

let { children, recipe = fileUploadItemRecipe, class: className, ...rest }: Props = $props();

const slots = $derived(recipe());
setFileUploadItemContext({
  get slots() {
    return slots;
  },
});
</script>

<FileUploadPrimitive.Item {...rest} class={slots.base({ class: cn(className) })}>
  {@render children?.()}
</FileUploadPrimitive.Item>
