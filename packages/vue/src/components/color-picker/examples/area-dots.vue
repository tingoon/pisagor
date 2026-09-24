<script lang="ts" setup>
import { ColorPicker } from "..";
</script>

<template>
  <ColorPicker default-value="#19932C" inline>
    <ColorPicker.Area show-dots x-channel="hue" y-channel="alpha">
      <ColorPicker.AreaThumb />
    </ColorPicker.Area>
  </ColorPicker>
</template>
