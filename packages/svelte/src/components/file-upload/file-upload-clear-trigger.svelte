<script lang="ts">
import type { FileUploadClearTriggerProps } from "@ark-ui/svelte/file-upload";
import { FileUpload as FileUploadPrimitive } from "@ark-ui/svelte/file-upload";

let { children, ...rest }: FileUploadClearTriggerProps = $props();
</script>

<FileUploadPrimitive.ClearTrigger {...rest}>
  {@render children?.()}
</FileUploadPrimitive.ClearTrigger>
