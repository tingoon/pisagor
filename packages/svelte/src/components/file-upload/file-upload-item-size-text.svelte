<script lang="ts">
  import {
    FileUpload as FileUploadPrimitive,
    type FileUploadItemSizeTextProps,
  } from "@ark-ui/svelte";
  import { withFileUploadItemContext } from "./file-upload.context";

  let { children, ...rest }: FileUploadItemSizeTextProps = $props();
  const part = withFileUploadItemContext(() => rest, {
    name: "ItemSizeText",
    slot: "sizeText",
  });
</script>

<FileUploadPrimitive.ItemSizeText {...part.props}>
  {@render children?.()}
</FileUploadPrimitive.ItemSizeText>
