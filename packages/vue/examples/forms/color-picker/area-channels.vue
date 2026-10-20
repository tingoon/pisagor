<script lang="ts" setup>
import { ColorPicker } from "@pisagor/vue";
</script>

<template>
  <ColorPicker.Root default-value="#182098" inline>
    <ColorPicker.Area x-channel="hue" y-channel="alpha">
      <ColorPicker.AreaBackground />
      <ColorPicker.AreaThumb />
    </ColorPicker.Area>
  </ColorPicker.Root>
</template>
