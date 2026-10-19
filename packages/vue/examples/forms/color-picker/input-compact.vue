<script lang="ts" setup>
import { PhPercent } from "@phosphor-icons/vue";
import { ColorPicker, InputGroup, parseColor, Separator } from "@pisagor/vue";

const defaultValue = parseColor("#0485F7").toString("hsla");
</script>

<template>
  <ColorPicker.Root format="hsla" :default-value="defaultValue">
    <ColorPicker.Control>
      <InputGroup>
        <ColorPicker.Trigger as-child>
          <InputGroup.Addon>
            <ColorPicker.SwatchPreview aria-hidden />
          </InputGroup.Addon>
        </ColorPicker.Trigger>
        <ColorPicker.Input as-child channel="hex" class="flex-1">
          <InputGroup.Input />
        </ColorPicker.Input>
        <Separator orientation="vertical" />
        <ColorPicker.Input as-child channel="alpha">
          <InputGroup.Input
            aria-label="Opacity percentage"
            class="text-right"
          />
        </ColorPicker.Input>
        <InputGroup.Addon align="inline-end">
          <PhPercent aria-hidden />
        </InputGroup.Addon>
      </InputGroup>
    </ColorPicker.Control>
    <Teleport to="body">
      <ColorPicker.Positioner>
        <ColorPicker.Content>
          <ColorPicker.Area show-dots>
            <ColorPicker.AreaBackground />
            <ColorPicker.AreaThumb />
          </ColorPicker.Area>
          <ColorPicker.View format="hsla">
            <ColorPicker.ChannelSlider channel="hue">
              <ColorPicker.ChannelSliderTrack />
              <ColorPicker.ChannelSliderThumb />
            </ColorPicker.ChannelSlider>
            <ColorPicker.ChannelSlider channel="saturation">
              <ColorPicker.ChannelSliderTrack />
              <ColorPicker.ChannelSliderThumb />
            </ColorPicker.ChannelSlider>
            <ColorPicker.ChannelSlider channel="lightness">
              <ColorPicker.ChannelSliderTrack />
              <ColorPicker.ChannelSliderThumb />
            </ColorPicker.ChannelSlider>
            <ColorPicker.ChannelSlider channel="alpha">
              <ColorPicker.TransparencyGrid />
              <ColorPicker.ChannelSliderTrack />
              <ColorPicker.ChannelSliderThumb />
            </ColorPicker.ChannelSlider>
          </ColorPicker.View>
        </ColorPicker.Content>
      </ColorPicker.Positioner>
    </Teleport>
  </ColorPicker.Root>
</template>
