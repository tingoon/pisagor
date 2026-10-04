<script lang="ts" setup>
import { ImageCropper } from "../../src/components/image-cropper";
</script>

<template>
  <ImageCropper fixed-crop-area>
    <ImageCropper.Image
      alt="Crop me"
      src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
    />
    <ImageCropper.Selection />
  </ImageCropper>
</template>
