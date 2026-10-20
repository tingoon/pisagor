<script lang="ts" setup>
import { ColorPicker } from "@pisagor/vue";
import { ref } from "vue";

const color = ref("rgba(82, 65, 235, 1)");
function onValueChange(next: typeof color.value) {
  color.value = next;
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <ColorPicker.Root
      class="w-full"
      format="hsla"
      inline
      :value="color"
      @value-change="onValueChange"
    >
      <ColorPicker.View format="hsla">
        <ColorPicker.ChannelSlider channel="hue">
          <ColorPicker.ChannelSliderTrack />
          <ColorPicker.ChannelSliderThumb />
        </ColorPicker.ChannelSlider>
      </ColorPicker.View>
    </ColorPicker.Root>
    <p class="text-muted-foreground text-center text-sm">{{ color }}</p>
  </div>
</template>
