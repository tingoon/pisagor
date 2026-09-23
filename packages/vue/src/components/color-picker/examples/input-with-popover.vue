<script lang="ts" setup >
import { InputGroup } from "@pisagor/vue";
import { ColorPicker } from "..";
</script>

<template>
        <ColorPicker default-value="#eb5e41" format="hsla">
          <ColorPicker.Control>
            <InputGroup>
              <ColorPicker.Trigger as-child>
                <InputGroup.Addon>
                  <ColorPicker.SwatchPreview />
                </InputGroup.Addon>
              </ColorPicker.Trigger>
              <ColorPicker.Input as-child>
                <InputGroup.Input />
              </ColorPicker.Input>
            </InputGroup>
          </ColorPicker.Control>
          <ColorPicker.Content>
            <ColorPicker.Area>
              <ColorPicker.AreaThumb />
            </ColorPicker.Area>
            <ColorPicker.View format="hsla">
              <ColorPicker.ChannelSlider channel="hue" />
            </ColorPicker.View>
          </ColorPicker.Content>
        </ColorPicker>
  
</template>
