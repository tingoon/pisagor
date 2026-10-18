<script lang="ts">
  import {
    FileUpload as FileUploadPrimitive,
    type FileUploadItemGroupProps,
  } from "@ark-ui/svelte";

  let { children, ...rest }: FileUploadItemGroupProps = $props();
</script>

<FileUploadPrimitive.ItemGroup {...rest}>
  {@render children?.()}
</FileUploadPrimitive.ItemGroup>
