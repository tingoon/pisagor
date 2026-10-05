<script lang="ts">
import {
  type FileUploadItemGroupProps,
  FileUpload as FileUploadPrimitive,
} from "@ark-ui/svelte/file-upload";

let { children, ...rest }: FileUploadItemGroupProps = $props();
</script>

<FileUploadPrimitive.ItemGroup {...rest}>
  {@render children?.()}
</FileUploadPrimitive.ItemGroup>
