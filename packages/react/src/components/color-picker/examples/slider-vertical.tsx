import { ColorPicker } from "..";

export function SliderVertical() {
  return (
    <ColorPicker>
      <ColorPicker.View format="hsla">
        <div className="flex flex-col gap-2">
          <ColorPicker.ChannelSlider channel="hue" orientation="vertical" />
        </div>
      </ColorPicker.View>
    </ColorPicker>
  );
}
