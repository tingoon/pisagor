<script lang="ts">
import {
  type FileUploadClearTriggerProps,
  FileUpload as FileUploadPrimitive,
} from "@ark-ui/svelte/file-upload";

let { children, ...rest }: FileUploadClearTriggerProps = $props();
</script>

<FileUploadPrimitive.ClearTrigger {...rest}>
  {@render children?.()}
</FileUploadPrimitive.ClearTrigger>
