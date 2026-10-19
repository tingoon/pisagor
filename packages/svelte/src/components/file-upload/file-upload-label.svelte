<script lang="ts">
  import {
    FileUpload as FileUploadPrimitive,
    type FileUploadLabelProps,
  } from "@ark-ui/svelte";
  import { withFileUploadContext } from "./file-upload.context";

  let { children, ...rest }: FileUploadLabelProps = $props();
  const part = withFileUploadContext(() => rest, { name: "Label" });
</script>

<FileUploadPrimitive.Label {...part.props}>
  {@render children?.()}
</FileUploadPrimitive.Label>
