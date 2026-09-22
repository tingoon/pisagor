<script setup lang="ts">
import { ImageCropper } from "..";
</script>

<template>
        <ImageCropper :max-height="160" :max-width="280" :min-height="80" :min-width="80">
          <ImageCropper.Image
            alt="Crop me"
            src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
          />
          <ImageCropper.Selection />
        </ImageCropper>
  
</template>
