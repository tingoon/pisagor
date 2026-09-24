<script lang="ts" setup>
import { Button, Input } from "@pisagor/vue";
import { ColorPicker } from "..";
</script>

<template>
  <ColorPicker format="rgba">
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
      <ColorPicker.ChannelSlider channel="hue" />
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
  </ColorPicker>
</template>
