<script lang="ts" setup>
import { Button, ColorPicker, Input } from "@pisagor/vue";
</script>

<template>
  <ColorPicker.Root format="rgba">
    <ColorPicker.Control>
      <ColorPicker.Trigger as-child>
        <Button size="lg" variant="ghost">
          <ColorPicker.SwatchPreview class="size-6" />
          Pick a color
        </Button>
      </ColorPicker.Trigger>
    </ColorPicker.Control>
    <Teleport to="body">
      <ColorPicker.Positioner>
        <ColorPicker.Content>
          <ColorPicker.Area>
            <ColorPicker.AreaBackground />
            <ColorPicker.AreaThumb />
          </ColorPicker.Area>
          <ColorPicker.ChannelSlider channel="hue">
            <ColorPicker.ChannelSliderTrack />
            <ColorPicker.ChannelSliderThumb />
          </ColorPicker.ChannelSlider>
          <div class="grid grid-cols-3 gap-2">
            <ColorPicker.Input as-child channel="red">
              <Input />
            </ColorPicker.Input>
            <ColorPicker.Input as-child channel="green">
              <Input />
            </ColorPicker.Input>
            <ColorPicker.Input as-child channel="blue">
              <Input />
            </ColorPicker.Input>
          </div>
        </ColorPicker.Content>
      </ColorPicker.Positioner>
    </Teleport>
  </ColorPicker.Root>
</template>
