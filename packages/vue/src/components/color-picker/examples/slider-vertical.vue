<script setup lang="ts">
import { ColorPicker } from "..";
</script>

<template>
        <ColorPicker class="h-56 justify-between" default-value="hsl(0, 100%, 50%)" format="hsla" inline>
          <ColorPicker.View format="hsla">
            <div class="flex flex-col gap-2">
              <ColorPicker.ChannelSlider channel="hue" orientation="vertical" />
            </div>
          </ColorPicker.View>
        </ColorPicker>
  
</template>
