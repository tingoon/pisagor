<script lang="ts" setup>
import { ColorPicker } from "..";
</script>

<template>
  <ColorPicker default-value="#EB5E41" disabled format="hsla" inline>
    <ColorPicker.View format="hsla">
      <ColorPicker.ChannelSlider channel="hue" />
    </ColorPicker.View>
  </ColorPicker>
</template>
