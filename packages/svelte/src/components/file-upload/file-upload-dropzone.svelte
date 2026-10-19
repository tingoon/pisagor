<script lang="ts">
  import {
    FileUpload as FileUploadPrimitive,
    type FileUploadDropzoneProps,
  } from "@ark-ui/svelte";
  import { withFileUploadContext } from "./file-upload.context";

  let { children, ...rest }: FileUploadDropzoneProps = $props();
  const part = withFileUploadContext(() => rest, { name: "Dropzone" });
</script>

<FileUploadPrimitive.Dropzone {...part.props}>
  {@render children?.()}
</FileUploadPrimitive.Dropzone>
