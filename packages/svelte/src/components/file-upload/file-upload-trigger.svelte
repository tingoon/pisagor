<script lang="ts">
import type { FileUploadTriggerProps } from "@ark-ui/svelte/file-upload";
import { FileUpload as FileUploadPrimitive } from "@ark-ui/svelte/file-upload";

let { children, ...rest }: FileUploadTriggerProps = $props();
</script>

<FileUploadPrimitive.Trigger {...rest}> {@render children?.()} </FileUploadPrimitive.Trigger>
