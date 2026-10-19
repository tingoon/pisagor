<script lang="ts">
  import {
    ImageCropper as ImageCropperPrimitive,
    type ImageCropperViewportProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./image-cropper.context";

  let { children, ...rest }: ImageCropperViewportProps = $props();
  const part = withContext(() => rest, { name: "Viewport" });
</script>

<ImageCropperPrimitive.Viewport {...part.props}>
  {@render children?.()}
</ImageCropperPrimitive.Viewport>
