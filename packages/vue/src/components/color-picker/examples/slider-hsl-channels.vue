<script setup lang="ts">
import { ColorPicker } from "..";
</script>

<template>
        <ColorPicker default-value="hsla(136, 69%, 50%, 1)" format="hsla" inline>
          <ColorPicker.View format="hsla">
            <div class="flex w-full flex-col gap-2">
              <ColorPicker.ChannelSlider channel="hue" />
              <ColorPicker.ChannelSlider channel="saturation" />
              <ColorPicker.ChannelSlider channel="lightness" />
            </div>
          </ColorPicker.View>
        </ColorPicker>
  
</template>
