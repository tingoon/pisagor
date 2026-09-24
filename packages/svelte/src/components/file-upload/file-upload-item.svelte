<script lang="ts">
import type { FileUploadItemProps } from "@ark-ui/svelte/file-upload";
import { FileUpload as FileUploadPrimitive } from "@ark-ui/svelte/file-upload";
import { fileUploadItemRecipe } from "@pisagor/recipes/file-upload";
import { cn } from "@pisagor/utils";
import { setFileUploadItemContext } from "./file-upload.context";

type Props = Omit<FileUploadItemProps, "class"> & {
  class?: string | undefined;
  itemRecipe?: typeof fileUploadItemRecipe;
};

let { children, itemRecipe = fileUploadItemRecipe, class: className, ...rest }: Props = $props();

const slots = $derived(itemRecipe());
setFileUploadItemContext({
  get slots() {
    return slots;
  },
});
</script>

<FileUploadPrimitive.Item {...rest} class={slots.base({ class: cn(className) })}>
  {@render children?.()}
</FileUploadPrimitive.Item>
