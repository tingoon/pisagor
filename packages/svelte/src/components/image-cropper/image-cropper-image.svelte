<script lang="ts">
  import {
    ImageCropper as ImageCropperPrimitive,
    type ImageCropperImageProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./image-cropper.context";

  let props: ImageCropperImageProps = $props();
  const part = withContext(() => props, { name: "Image" });
</script>

<ImageCropperPrimitive.Image {...part.props} />
