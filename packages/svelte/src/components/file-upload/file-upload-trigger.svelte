<script lang="ts">
import {
  FileUpload as FileUploadPrimitive,
  type FileUploadTriggerProps,
} from "@ark-ui/svelte/file-upload";

let { children, ...rest }: FileUploadTriggerProps = $props();
</script>

<FileUploadPrimitive.Trigger {...rest}>
  {@render children?.()}
</FileUploadPrimitive.Trigger>
