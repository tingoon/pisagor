<script lang="ts">
import {
  type FileUploadItemNameProps,
  FileUpload as FileUploadPrimitive,
} from "@ark-ui/svelte/file-upload";
import { cn } from "@pisagor/utils";
import { useFileUploadItem } from "./file-upload.context";

let { class: className, ...rest }: FileUploadItemNameProps = $props();
const { slots } = useFileUploadItem();
</script>

<FileUploadPrimitive.ItemName
  {...rest}
  class={slots.name({ class: cn(className) })}
/>
