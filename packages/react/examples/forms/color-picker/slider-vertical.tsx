import { ColorPicker } from "@pisagor/react";

export function SliderVertical() {
  return (
    <ColorPicker.Root>
      <ColorPicker.View format="hsla">
        <div className="flex flex-col gap-2">
          <ColorPicker.ChannelSlider channel="hue" orientation="vertical">
            <ColorPicker.ChannelSliderTrack />
            <ColorPicker.ChannelSliderThumb />
          </ColorPicker.ChannelSlider>
        </div>
      </ColorPicker.View>
    </ColorPicker.Root>
  );
}
