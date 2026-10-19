<script lang="ts">
  import {
    ImageCropper as ImageCropperPrimitive,
    type ImageCropperRootProps as ArkRootProps,
  } from "@ark-ui/svelte";
  import type { ImageCropperRootContract } from "@pisagor/contracts";
  import { withProvider } from "./image-cropper.context";

  type Props = ArkRootProps & ImageCropperRootContract;

  let { children, ...rest }: Props = $props();
  const root = withProvider(() => rest, { name: "Root" });
</script>

<ImageCropperPrimitive.Root {...root.props}>
  {@render children?.()}
</ImageCropperPrimitive.Root>
