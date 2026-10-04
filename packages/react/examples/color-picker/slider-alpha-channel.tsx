import { ColorPicker } from "@pisagor/react/color-picker";

export function SliderAlphaChannel() {
  return (
    <ColorPicker>
      <ColorPicker.View format="rgba">
        <ColorPicker.ChannelSlider channel="alpha">
          <ColorPicker.TransparencyGrid />
        </ColorPicker.ChannelSlider>
      </ColorPicker.View>
    </ColorPicker>
  );
}
