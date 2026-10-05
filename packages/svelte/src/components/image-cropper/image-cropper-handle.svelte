<script lang="ts">
import {
  type ImageCropperHandleProps,
  ImageCropper as ImageCropperPrimitive,
} from "@ark-ui/svelte/image-cropper";
import { cn } from "@pisagor/utils";
import { useImageCropper } from "./image-cropper.context";

let { class: className, ...rest }: ImageCropperHandleProps = $props();
const { slots } = useImageCropper();
</script>

<ImageCropperPrimitive.Handle
  {...rest}
  class={slots.handle({ class: cn(className) })}
>
  <span aria-hidden="true" class={slots.handleGrip()}></span>
</ImageCropperPrimitive.Handle>
