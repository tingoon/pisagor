<script lang="ts">
import type { ImageCropperGridProps } from "@ark-ui/svelte/image-cropper";
import { ImageCropper as ImageCropperPrimitive } from "@ark-ui/svelte/image-cropper";
import { cn } from "@pisagor/utils";
import { useImageCropper } from "./image-cropper.context";

type Props = Omit<ImageCropperGridProps, "class"> & { class?: string | undefined };
let { class: className, ...rest }: Props = $props();
const { slots } = useImageCropper();
</script>

<ImageCropperPrimitive.Grid {...rest} class={slots.grid({ class: cn(className) })} />
