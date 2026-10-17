<script lang="ts">
import source from "./area-channels.vue?raw";
export { source };
</script>

<script lang="ts" setup>
import { ColorPicker } from "@pisagor/vue";
</script>

<template>
  <ColorPicker default-value="#182098" inline>
    <ColorPicker.Area x-channel="hue" y-channel="alpha">
      <ColorPicker.AreaThumb />
    </ColorPicker.Area>
  </ColorPicker>
</template>
