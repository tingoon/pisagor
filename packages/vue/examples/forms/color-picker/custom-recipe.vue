<script lang="ts" setup>
import { PhEyedropper } from "@phosphor-icons/vue";
import { colorPickerRecipe } from "@pisagor/recipes";
import { Button, ColorPicker, InputGroup } from "@pisagor/vue";
import { tv } from "tailwind-variants";

const brandColorPickerRecipe = tv({
  extend: colorPickerRecipe,
  slots: { content: "border-emerald-500/40" },
  variants: {},
});
</script>

<template>
  <ColorPicker.Root :recipe="brandColorPickerRecipe">
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
    <Teleport to="body">
      <ColorPicker.Positioner>
        <ColorPicker.Content>
          <ColorPicker.Area>
            <ColorPicker.AreaBackground />
            <ColorPicker.AreaThumb />
          </ColorPicker.Area>
          <ColorPicker.View format="hsla">
            <div class="flex items-center gap-3">
              <ColorPicker.EyeDropperTrigger as-child>
                <Button size="icon-md" variant="outline">
                  <PhEyedropper />
                </Button>
              </ColorPicker.EyeDropperTrigger>
              <div class="flex flex-1 flex-col gap-2.5">
                <ColorPicker.ChannelSlider channel="hue">
                  <ColorPicker.ChannelSliderTrack />
                  <ColorPicker.ChannelSliderThumb />
                </ColorPicker.ChannelSlider>
                <ColorPicker.ChannelSlider channel="alpha">
                  <ColorPicker.TransparencyGrid />
                  <ColorPicker.ChannelSliderTrack />
                  <ColorPicker.ChannelSliderThumb />
                </ColorPicker.ChannelSlider>
              </div>
            </div>
          </ColorPicker.View>
        </ColorPicker.Content>
      </ColorPicker.Positioner>
    </Teleport>
  </ColorPicker.Root>
</template>
