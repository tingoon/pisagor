<script lang="ts" setup >
import { ImageCropper } from "..";

const initialCrop = { height: 0.5, width: 0.5, x: 0.25, y: 0.25 };
</script>

<template>
        <ImageCropper :initial-crop="initialCrop">
          <ImageCropper.Image
            alt="Crop me"
            src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
          />
          <ImageCropper.Selection />
        </ImageCropper>
  
</template>
