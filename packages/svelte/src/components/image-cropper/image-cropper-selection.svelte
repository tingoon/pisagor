<script lang="ts">
  import {
    ImageCropper as ImageCropperPrimitive,
    type ImageCropperSelectionProps,
  } from "@ark-ui/svelte";
  import { withContext } from "./image-cropper.context";

  let { children, ...rest }: ImageCropperSelectionProps = $props();
  const part = withContext(() => rest, { name: "Selection" });
</script>

<ImageCropperPrimitive.Selection {...part.props}>
  {@render children?.()}
</ImageCropperPrimitive.Selection>
