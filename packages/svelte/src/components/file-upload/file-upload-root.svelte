<script lang="ts">
  import {
    FileUpload as FileUploadPrimitive,
    type FileUploadRootProps as ArkRootProps,
  } from "@ark-ui/svelte";
  import type { FileUploadRootContract } from "@pisagor/contracts";

  import { withFileUploadProvider } from "./file-upload.context";

  type Props = ArkRootProps & {
    onValueChange?: (value: globalThis.File[]) => void;
  } & FileUploadRootContract;

  let { children, onFileChange, onValueChange, ...rest }: Props = $props();

  const root = withFileUploadProvider(() => rest, { name: "Root" });

  function handleFileChange(
    details: Parameters<NonNullable<Props["onFileChange"]>>[0],
  ) {
    onFileChange?.(details);
    onValueChange?.(details.acceptedFiles);
  }
</script>

<FileUploadPrimitive.Root {...root.props} onFileChange={handleFileChange}>
  {@render children?.()}
  <FileUploadPrimitive.HiddenInput />
</FileUploadPrimitive.Root>
