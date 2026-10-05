<script lang="ts">
import {
  type ImageCropperGridProps,
  ImageCropper as ImageCropperPrimitive,
} from "@ark-ui/svelte/image-cropper";
import { cn } from "@pisagor/utils";
import { useImageCropper } from "./image-cropper.context";

let { class: className, ...rest }: ImageCropperGridProps = $props();
const { slots } = useImageCropper();
</script>

<ImageCropperPrimitive.Grid
  {...rest}
  class={slots.grid({ class: cn(className) })}
/>
