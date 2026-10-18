<script lang="ts">
  import {
    FileUpload as FileUploadPrimitive,
    type FileUploadItemPreviewProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useFileUploadItem } from "./file-upload.context";

  let {
    class: className,
    children,
    ...rest
  }: FileUploadItemPreviewProps = $props();
  const styles = useFileUploadItem();
  const slots = $derived(styles.slots);
</script>

<FileUploadPrimitive.ItemPreview
  {...rest}
  class={slots.preview({ class: cn(className) })}
>
  {@render children?.()}
</FileUploadPrimitive.ItemPreview>
