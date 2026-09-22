<script setup lang="ts">
import { ImageCropper } from "..";
</script>

<template>
        <ImageCropper class="aspect-video">
          <ImageCropper.Image
            alt="Crop me"
            src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
          />
          <ImageCropper.Selection />
        </ImageCropper>
  
</template>
