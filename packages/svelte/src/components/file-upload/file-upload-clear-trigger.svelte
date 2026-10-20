<script lang="ts">
  import {
    FileUpload as FileUploadPrimitive,
    type FileUploadClearTriggerProps,
  } from "@ark-ui/svelte";
  import { useLocale } from "../provider/context";
  import { withFileUploadContext } from "./file-upload.context";

  let { children, ...rest }: FileUploadClearTriggerProps = $props();
  const { m } = useLocale();
  const part = withFileUploadContext(
    () => ({ "aria-label": m("fileUpload.clearFiles"), ...rest }),
    {
      name: "ClearTrigger",
    },
  );
</script>

<FileUploadPrimitive.ClearTrigger {...part.props}>
  {@render children?.()}
</FileUploadPrimitive.ClearTrigger>
