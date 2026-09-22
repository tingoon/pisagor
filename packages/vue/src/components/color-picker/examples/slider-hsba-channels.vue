<script setup lang="ts">
import { ColorPicker } from "..";
</script>

<template>
        <ColorPicker default-value="#0485F7" format="hsba" inline>
          <ColorPicker.View format="hsba">
            <div class="flex w-full flex-col gap-2">
              <ColorPicker.ChannelSlider channel="hue" />
              <ColorPicker.ChannelSlider channel="saturation" />
              <ColorPicker.ChannelSlider channel="brightness" />
            </div>
          </ColorPicker.View>
        </ColorPicker>
  
</template>
