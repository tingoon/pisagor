<script lang="ts">
  import {
    FileUpload as FileUploadPrimitive,
    type FileUploadItemPreviewProps,
  } from "@ark-ui/svelte";
  import { withFileUploadItemContext } from "./file-upload.context";

  let { children, ...rest }: FileUploadItemPreviewProps = $props();
  const part = withFileUploadItemContext(() => rest, {
    name: "ItemPreview",
    slot: "preview",
  });
</script>

<FileUploadPrimitive.ItemPreview {...part.props}>
  {@render children?.()}
</FileUploadPrimitive.ItemPreview>
