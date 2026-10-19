<script lang="ts">
  import {
    FileUpload as FileUploadPrimitive,
    type FileUploadItemGroupProps,
  } from "@ark-ui/svelte";
  import { withFileUploadContext } from "./file-upload.context";

  let { children, ...rest }: FileUploadItemGroupProps = $props();
  const part = withFileUploadContext(() => rest, { name: "ItemGroup" });
</script>

<FileUploadPrimitive.ItemGroup {...part.props}>
  {@render children?.()}
</FileUploadPrimitive.ItemGroup>
