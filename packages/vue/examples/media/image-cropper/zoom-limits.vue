<script lang="ts" setup>
import { ImageCropper } from "@pisagor/vue";
</script>

<template>
  <ImageCropper
    :max-zoom="2"
    :min-zoom="0.5"
    alt="Crop me"
    src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
  />
</template>
