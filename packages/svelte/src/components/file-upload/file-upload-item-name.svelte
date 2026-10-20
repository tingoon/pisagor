<script lang="ts">
  import {
    FileUpload as FileUploadPrimitive,
    type FileUploadItemNameProps,
  } from "@ark-ui/svelte";
  import { withFileUploadItemContext } from "./file-upload.context";

  let { children, ...rest }: FileUploadItemNameProps = $props();
  const part = withFileUploadItemContext(() => rest, {
    name: "ItemName",
    slot: "name",
  });
</script>

<FileUploadPrimitive.ItemName {...part.props}>
  {@render children?.()}
</FileUploadPrimitive.ItemName>
