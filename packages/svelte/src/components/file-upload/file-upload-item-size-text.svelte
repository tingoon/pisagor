<script lang="ts">
  import {
    FileUpload as FileUploadPrimitive,
    type FileUploadItemSizeTextProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useFileUploadItem } from "./file-upload.context";

  let { class: className, ...rest }: FileUploadItemSizeTextProps = $props();
  const styles = useFileUploadItem();
  const slots = $derived(styles.slots);
</script>

<FileUploadPrimitive.ItemSizeText
  {...rest}
  class={slots.sizeText({ class: cn(className) })}
/>
