<script lang="ts">
import type { FileUploadItemNameProps } from "@ark-ui/svelte/file-upload";
import { FileUpload as FileUploadPrimitive } from "@ark-ui/svelte/file-upload";
import { cn } from "@pisagor/utils";
import { useFileUploadItem } from "./file-upload.context";

type Props = Omit<FileUploadItemNameProps, "class"> & { class?: string | undefined };
let { class: className, ...rest }: Props = $props();
const { slots } = useFileUploadItem();
</script>

<FileUploadPrimitive.ItemName {...rest} class={slots.name({ class: cn(className) })} />
