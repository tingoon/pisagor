<script lang="ts">
  import {
    FileUpload as FileUploadPrimitive,
    type FileUploadItemNameProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useFileUploadItem } from "./file-upload.context";

  let { class: className, ...rest }: FileUploadItemNameProps = $props();
  const styles = useFileUploadItem();
  const slots = $derived(styles.slots);
</script>

<FileUploadPrimitive.ItemName
  {...rest}
  class={slots.name({ class: cn(className) })}
/>
