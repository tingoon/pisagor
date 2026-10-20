<script lang="ts" setup>
import { ColorPicker } from "@pisagor/vue";
</script>

<template>
  <ColorPicker.Root default-value="#EB5E41" disabled format="hsla" inline>
    <ColorPicker.View format="hsla">
      <ColorPicker.ChannelSlider channel="hue">
        <ColorPicker.ChannelSliderTrack />
        <ColorPicker.ChannelSliderThumb />
      </ColorPicker.ChannelSlider>
    </ColorPicker.View>
  </ColorPicker.Root>
</template>
