import { ColorPicker } from "@pisagor/solid";

export function SliderDisabled() {
  return (
    <ColorPicker.Root>
      <ColorPicker.View format="hsla">
        <ColorPicker.ChannelSlider channel="hue">
          <ColorPicker.ChannelSliderTrack />
          <ColorPicker.ChannelSliderThumb />
        </ColorPicker.ChannelSlider>
      </ColorPicker.View>
    </ColorPicker.Root>
  );
}
