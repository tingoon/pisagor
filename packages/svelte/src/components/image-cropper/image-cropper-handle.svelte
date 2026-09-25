<script lang="ts">
import type { ImageCropperHandleProps } from "@ark-ui/svelte/image-cropper";
import { ImageCropper as ImageCropperPrimitive } from "@ark-ui/svelte/image-cropper";
import { cn } from "@pisagor/utils";
import { useImageCropper } from "./image-cropper.context";

type Props = Omit<ImageCropperHandleProps, "class"> & { class?: string | undefined };
let { class: className, ...rest }: Props = $props();
const { slots } = useImageCropper();
</script>

<ImageCropperPrimitive.Handle {...rest} class={slots.handle({ class: cn(className) })}>
  <span aria-hidden="true" class={slots.handleGrip()}></span>
</ImageCropperPrimitive.Handle>
