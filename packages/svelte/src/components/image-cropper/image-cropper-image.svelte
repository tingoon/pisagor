<script lang="ts">
import {
  type ImageCropperImageProps,
  ImageCropper as ImageCropperPrimitive,
} from "@ark-ui/svelte/image-cropper";
import { withContext } from "./image-cropper.context";

let { ...rest }: ImageCropperImageProps = $props();
const part = withContext(() => rest, { name: "Image" });
</script>

<ImageCropperPrimitive.Image {...part.props} />
