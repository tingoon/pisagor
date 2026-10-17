<script lang="ts">
import source from "./area-dots.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { ColorPicker } from "@pisagor/vue";
</script>

<template>
  <ColorPicker default-value="#19932C" inline>
    <ColorPicker.Area show-dots x-channel="hue" y-channel="alpha">
      <ColorPicker.AreaThumb />
    </ColorPicker.Area>
  </ColorPicker>
</template>
