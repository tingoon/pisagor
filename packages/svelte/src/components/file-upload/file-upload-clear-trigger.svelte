<script lang="ts">
  import {
    FileUpload as FileUploadPrimitive,
    type FileUploadClearTriggerProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: FileUploadClearTriggerProps = $props();
</script>

<FileUploadPrimitive.ClearTrigger {...rest}>
  {@render children?.()}
</FileUploadPrimitive.ClearTrigger>
