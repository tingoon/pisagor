<script lang="ts">
import { FileUpload as FileUploadPrimitive } from "@ark-ui/svelte/file-upload";
import { cn } from "@pisagor/utils";
import { useFileUploadItem } from "./file-upload.context";

type Props = { class?: string | undefined; [key: string]: unknown };
let { class: className, ...rest }: Props = $props();
const { slots } = useFileUploadItem();
</script>

<FileUploadPrimitive.ItemPreviewImage
  {...rest}
  class={slots.previewImage({ class: cn(className) })}
/>
