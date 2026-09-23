import { ColorPicker } from "..";

export function SliderDisabled() {
  return (
    <ColorPicker>
      <ColorPicker.View format="hsla">
        <ColorPicker.ChannelSlider channel="hue" />
      </ColorPicker.View>
    </ColorPicker>
  );
}
