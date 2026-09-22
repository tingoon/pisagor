import { ColorPicker } from "..";

export function SliderHslChannels() {
  return (
    <ColorPicker>
      <ColorPicker.View format="hsla">
        <div className="flex w-full flex-col gap-2">
          <ColorPicker.ChannelSlider channel="hue" />
          <ColorPicker.ChannelSlider channel="saturation" />
          <ColorPicker.ChannelSlider channel="lightness" />
        </div>
      </ColorPicker.View>
    </ColorPicker>
  );
}
