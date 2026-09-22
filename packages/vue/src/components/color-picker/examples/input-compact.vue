<script setup lang="ts">
import { PhPercent } from "@phosphor-icons/vue";
import { InputGroup, Separator } from "@pisagor/vue";
import { ColorPicker } from "..";

const defaultValue = parseColor("#0485F7").toString("hsla");
</script>

<template>
        <ColorPicker :default-value="defaultValue" format="hsla">
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
                <InputGroup.Input aria-label="Opacity percentage" class="text-right" />
              </ColorPicker.Input>
              <InputGroup.Addon align="inline-end">
                <PhPercent aria-hidden />
              </InputGroup.Addon>
            </InputGroup>
          </ColorPicker.Control>
          <ColorPicker.Content>
            <ColorPicker.Area show-dots>
              <ColorPicker.AreaThumb />
            </ColorPicker.Area>
            <ColorPicker.View format="hsla">
              <ColorPicker.ChannelSlider channel="hue" />
              <ColorPicker.ChannelSlider channel="saturation" />
              <ColorPicker.ChannelSlider channel="lightness" />
              <ColorPicker.ChannelSlider channel="alpha">
                <ColorPicker.TransparencyGrid />
              </ColorPicker.ChannelSlider>
            </ColorPicker.View>
          </ColorPicker.Content>
        </ColorPicker>
  
</template>
