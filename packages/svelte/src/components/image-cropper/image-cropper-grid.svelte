<script lang="ts">
  import {
    ImageCropper as ImageCropperPrimitive,
    type ImageCropperGridProps,
  } from "@ark-ui/svelte";
  import { cn } from "@pisagor/utils";
  import { useImageCropper } from "./image-cropper.context";

  let { class: className, ...rest }: ImageCropperGridProps = $props();
  const styles = useImageCropper();
  const slots = $derived(styles.slots);
</script>

<ImageCropperPrimitive.Grid
  {...rest}
  class={slots.grid({ class: cn(className) })}
/>
