<script lang="ts">
  import {
    FileUpload as FileUploadPrimitive,
    type FileUploadTriggerProps,
  } from "@ark-ui/svelte";
  import { withFileUploadContext } from "./file-upload.context";

  let { children, ...rest }: FileUploadTriggerProps = $props();
  const part = withFileUploadContext(() => rest, { name: "Trigger" });
</script>

<FileUploadPrimitive.Trigger {...part.props}>
  {@render children?.()}
</FileUploadPrimitive.Trigger>
