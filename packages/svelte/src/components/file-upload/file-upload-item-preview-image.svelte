<script lang="ts">
  import {
    FileUpload as FileUploadPrimitive,
    type FileUploadItemPreviewImageProps,
  } from "@ark-ui/svelte";
  import { withFileUploadItemContext } from "./file-upload.context";

  let props: FileUploadItemPreviewImageProps = $props();
  const part = withFileUploadItemContext(() => props, {
    name: "ItemPreviewImage",
    slot: "previewImage",
  });
</script>

<FileUploadPrimitive.ItemPreviewImage {...part.props} />
