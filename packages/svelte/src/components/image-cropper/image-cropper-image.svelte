<script lang="ts">
import {
  type ImageCropperImageProps,
  ImageCropper as ImageCropperPrimitive,
} from "@ark-ui/svelte/image-cropper";
import { cn } from "@pisagor/utils";
import { useImageCropper } from "./image-cropper.context";

let { class: className, ...rest }: ImageCropperImageProps = $props();
const { slots } = useImageCropper();
</script>

<ImageCropperPrimitive.Image
  {...rest}
  class={slots.image({ class: cn(className) })}
/>
