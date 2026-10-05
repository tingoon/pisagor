<script lang="ts">
import {
  type FileUploadItemSizeTextProps,
  FileUpload as FileUploadPrimitive,
} from "@ark-ui/svelte/file-upload";
import { cn } from "@pisagor/utils";
import { useFileUploadItem } from "./file-upload.context";

let { class: className, ...rest }: FileUploadItemSizeTextProps = $props();
const { slots } = useFileUploadItem();
</script>

<FileUploadPrimitive.ItemSizeText
  {...rest}
  class={slots.size({ class: cn(className) })}
/>
