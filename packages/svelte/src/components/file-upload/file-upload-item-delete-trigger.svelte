<script lang="ts">
  import {
    FileUpload as FileUploadPrimitive,
    type FileUploadItemDeleteTriggerProps,
  } from "@ark-ui/svelte";
  import { useLocale } from "../provider/context";
  import { withFileUploadItemContext } from "./file-upload.context";

  let { children, ...rest }: FileUploadItemDeleteTriggerProps = $props();
  const { m } = useLocale();
  const part = withFileUploadItemContext(
    () => ({ "aria-label": m("fileUpload.removeFile"), ...rest }),
    {
      name: "ItemDeleteTrigger",
      slot: "deleteTrigger",
    },
  );
</script>

<FileUploadPrimitive.ItemDeleteTrigger {...part.props}>
  {@render children?.()}
</FileUploadPrimitive.ItemDeleteTrigger>
