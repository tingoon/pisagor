<script lang="ts" setup>
import { ColorPicker } from "..";
</script>

<template>
  <ColorPicker default-value="hsla(0, 100%, 50%, 0.5)" format="rgba" inline>
    <ColorPicker.View format="rgba">
      <ColorPicker.ChannelSlider channel="alpha">
        <ColorPicker.TransparencyGrid />
      </ColorPicker.ChannelSlider>
    </ColorPicker.View>
  </ColorPicker>
</template>
