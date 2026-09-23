<script lang="ts" setup >
import { Button } from "@pisagor/vue";
import { ColorPicker } from "..";

const swatchPalette = ["#eb5e41", "#f5a524", "#17c964", "#006FEE", "#7828c8", "#ffffff", "#000000"];
</script>

<template>
        <ColorPicker default-value="#eb5e41" format="hsla">
          <ColorPicker.Control>
            <ColorPicker.Trigger as-child>
              <Button size="lg" variant="ghost">
                <ColorPicker.SwatchPreview class="size-6" />
                Pick a color
              </Button>
            </ColorPicker.Trigger>
          </ColorPicker.Control>
          <ColorPicker.Content>
            <ColorPicker.Area>
              <ColorPicker.AreaThumb />
            </ColorPicker.Area>
            <ColorPicker.View format="hsla">
              <ColorPicker.ChannelSlider channel="hue" />
            </ColorPicker.View>
            <ColorPicker.SwatchGroup>
              <ColorPicker.SwatchTrigger
                class="size-4"
                v-for="color in swatchPalette"
                :key="color"
                :value="color"
              >
                <ColorPicker.Swatch :value="color" />
              </ColorPicker.SwatchTrigger>
            </ColorPicker.SwatchGroup>
          </ColorPicker.Content>
        </ColorPicker>
  
</template>
