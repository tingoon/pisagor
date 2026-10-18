<script lang="ts">
  import {
    ImageCropper as ImageCropperPrimitive,
    type ImageCropperImageProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./image-cropper.context";

  let { ...rest }: ImageCropperImageProps = $props();
  const part = withContext(() => rest, { name: "Image" });
</script>

<ImageCropperPrimitive.Image {...part.props} />
