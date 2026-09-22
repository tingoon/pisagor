<script setup lang="ts">
import { PhMagnifyingGlassMinus, PhMagnifyingGlassPlus } from "@phosphor-icons/vue";
import { Button } from "@pisagor/vue";
import { ref } from "vue";
import { ImageCropper } from "..";

const zoom = ref(1);
function onZoomChange(details: { zoom: number }) {
  zoom.value = details.zoom;
}
function zoomIn() {
  zoom.value = Math.min(3, zoom.value + 0.2);
}
function zoomOut() {
  zoom.value = Math.max(1, zoom.value - 0.2);
}
</script>

<template>
        <div class="flex flex-col items-end gap-2">
          <ImageCropper @zoom-change="onZoomChange" :zoom="zoom">
            <ImageCropper.Image
              alt="Crop me"
              src="https://images.unsplash.com/photo-1662692735672-544412d65934?w=600&auto=format"
            />
            <ImageCropper.Selection />
          </ImageCropper>
          <div class="flex gap-1">
            <Button aria-label="Zoom out" size="icon-sm" variant="outline" @click="zoomOut">
              <PhMagnifyingGlassMinus aria-hidden="true" />
            </Button>
            <Button aria-label="Zoom in" size="icon-sm" variant="outline" @click="zoomIn">
              <PhMagnifyingGlassPlus aria-hidden="true" />
            </Button>
          </div>
        </div>
  
</template>
