<script lang="ts">
import type { FileUploadItemPreviewProps } from "@ark-ui/svelte/file-upload";
import { FileUpload as FileUploadPrimitive } from "@ark-ui/svelte/file-upload";
import { cn } from "@pisagor/utils";
import { useFileUploadItem } from "./file-upload.context";

type Props = Omit<FileUploadItemPreviewProps, "class"> & { class?: string | undefined };
let { class: className, children, ...rest }: Props = $props();
const { slots } = useFileUploadItem();
</script>

<FileUploadPrimitive.ItemPreview {...rest} class={slots.preview({ class: cn(className) })}>
  {@render children?.()}
</FileUploadPrimitive.ItemPreview>
