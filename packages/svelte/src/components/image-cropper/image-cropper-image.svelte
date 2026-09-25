<script lang="ts">
import type { ImageCropperImageProps } from "@ark-ui/svelte/image-cropper";
import { ImageCropper as ImageCropperPrimitive } from "@ark-ui/svelte/image-cropper";
import { cn } from "@pisagor/utils";
import { useImageCropper } from "./image-cropper.context";

type Props = Omit<ImageCropperImageProps, "class"> & { class?: string | undefined };
let { class: className, ...rest }: Props = $props();
const { slots } = useImageCropper();
</script>

<ImageCropperPrimitive.Image {...rest} class={slots.image({ class: cn(className) })} />
