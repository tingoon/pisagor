<script lang="ts">
import { FileUpload as FileUploadPrimitive } from "@ark-ui/svelte/file-upload";
import { cn } from "@pisagor/utils";
import type { ClassValue } from "svelte/elements";
import { useFileUploadItem } from "./file-upload.context";

type Props = {
  class?: ClassValue;
  [key: string]: unknown;
};
let { class: className, ...rest }: Props = $props();
const styles = useFileUploadItem();
const slots = $derived(styles.slots);
</script>

<FileUploadPrimitive.ItemPreviewImage
  {...rest}
  class={slots.previewImage({ class: cn(className) })}
/>
