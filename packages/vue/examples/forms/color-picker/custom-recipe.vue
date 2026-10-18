<script lang="ts" setup>
import { colorPickerRecipe } from "@pisagor/recipes";
import { ColorPicker, InputGroup } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandColorPickerRecipe = tv({
  extend: colorPickerRecipe,
  slots: { content: "border-emerald-500/40" },
  variants: {},
});
</script>

<template>
  <ColorPicker :recipe="brandColorPickerRecipe">
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
        <div class="flex items-center gap-3">
          <ColorPicker.EyeDropperTrigger />
          <div class="flex flex-1 flex-col gap-2.5">
            <ColorPicker.ChannelSlider channel="hue" />
            <ColorPicker.ChannelSlider channel="alpha">
              <ColorPicker.TransparencyGrid />
            </ColorPicker.ChannelSlider>
          </div>
        </div>
      </ColorPicker.View>
    </ColorPicker.Content>
  </ColorPicker>
</template>
