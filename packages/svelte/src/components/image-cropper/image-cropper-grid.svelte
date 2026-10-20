<script lang="ts">
  import {
    ImageCropper as ImageCropperPrimitive,
    type ImageCropperGridProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./image-cropper.context";

  let props: ImageCropperGridProps = $props();
  const part = withContext(() => props, { name: "Grid" });
</script>

<ImageCropperPrimitive.Grid {...part.props} />
