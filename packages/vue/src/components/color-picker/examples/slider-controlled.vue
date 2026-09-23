<script lang="ts" setup >
import { ref } from "vue";
import { ColorPicker } from "..";

const color = ref("rgba(82, 65, 235, 1)");
const onValueChange = setColor;
</script>

<template>
        <div class="flex flex-col gap-2">
          <ColorPicker class="w-full" format="hsla" inline :value="color" @value-change="onValueChange" >
            <ColorPicker.View format="hsla">
              <ColorPicker.ChannelSlider channel="hue" />
            </ColorPicker.View>
          </ColorPicker>
          <p class="text-center text-muted-foreground text-sm">{{ color }}</p>
        </div>
  
</template>
