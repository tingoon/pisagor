<script lang="ts">
import type { FileUploadItemSizeTextProps } from "@ark-ui/svelte/file-upload";
import { FileUpload as FileUploadPrimitive } from "@ark-ui/svelte/file-upload";
import { useFileUploadItem } from "./file-upload.context";

type Props = Omit<FileUploadItemSizeTextProps, "class"> & {
  class?: string | undefined;
};
let { class: className, ...rest }: Props = $props();
const { slots } = useFileUploadItem();
</script>

<FileUploadPrimitive.ItemSizeText
  {...rest}
  class={slots.size({ class: className })}
/>
