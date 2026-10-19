import { ColorPicker } from "@pisagor/react";

export function SliderAlphaChannel() {
  return (
    <ColorPicker.Root>
      <ColorPicker.View format="rgba">
        <ColorPicker.ChannelSlider channel="alpha">
          <ColorPicker.TransparencyGrid />
          <ColorPicker.ChannelSliderTrack />
          <ColorPicker.ChannelSliderThumb />
        </ColorPicker.ChannelSlider>
      </ColorPicker.View>
    </ColorPicker.Root>
  );
}
