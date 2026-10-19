<script lang="ts">
  import {
    FileUpload as FileUploadPrimitive,
    type FileUploadDropzoneProps as ArkProps,
  } from "@ark-ui/svelte";
  import { withFileUploadContext } from "./file-upload.context";

  let { children, ...rest }: ArkProps = $props();
  const part = withFileUploadContext(() => rest, { name: "Dropzone" });
</script>

<FileUploadPrimitive.Dropzone {...part.props}>
  {@render children?.()}
</FileUploadPrimitive.Dropzone>
