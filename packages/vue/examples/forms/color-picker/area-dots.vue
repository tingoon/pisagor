<script lang="ts" setup>
import { ColorPicker } from "@pisagor/vue";
</script>

<template>
  <ColorPicker.Root default-value="#19932C" inline>
    <ColorPicker.Area show-dots x-channel="hue" y-channel="alpha">
      <ColorPicker.AreaBackground />
      <ColorPicker.AreaThumb />
    </ColorPicker.Area>
  </ColorPicker.Root>
</template>
