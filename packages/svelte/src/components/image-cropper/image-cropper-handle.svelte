<script lang="ts">
  import {
    ImageCropper as ImageCropperPrimitive,
    type ImageCropperHandleProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useImageCropper } from "./image-cropper.context";

  let { class: className, ...rest }: ImageCropperHandleProps = $props();
  const styles = useImageCropper();
  const slots = $derived(styles.slots);
</script>

<ImageCropperPrimitive.Handle
  {...rest}
  class={slots.handle({ class: cn(className) })}
>
  <span aria-hidden="true" class={slots.handleGrip()}></span>
</ImageCropperPrimitive.Handle>
