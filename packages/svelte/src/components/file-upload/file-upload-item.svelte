<script lang="ts">
  import {
    FileUpload as FileUploadPrimitive,
    type FileUploadItemProps,
  } from "@ark-ui/svelte";
  import type { FileUploadItemRootContract } from "@pisagor/contracts";
  import { withFileUploadItemProvider } from "./file-upload.context";

  type Props = FileUploadItemProps & FileUploadItemRootContract;

  let { children, ...rest }: Props = $props();
  const part = withFileUploadItemProvider(() => rest, {
    name: "Item",
    slot: "base",
  });
</script>

<FileUploadPrimitive.Item {...part.props}>
  {@render children?.()}
</FileUploadPrimitive.Item>
