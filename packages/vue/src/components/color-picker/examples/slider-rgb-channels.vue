<script lang="ts" setup >
import { ColorPicker } from "..";
</script>

<template>
        <ColorPicker default-value="#ff6432" format="rgba" inline>
          <ColorPicker.View format="rgba">
            <div class="flex w-full flex-col gap-2">
              <ColorPicker.ChannelSlider channel="red" />
              <ColorPicker.ChannelSlider channel="green" />
              <ColorPicker.ChannelSlider channel="blue" />
            </div>
          </ColorPicker.View>
        </ColorPicker>
  
</template>
