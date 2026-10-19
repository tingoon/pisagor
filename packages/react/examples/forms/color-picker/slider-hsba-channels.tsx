import { ColorPicker } from "@pisagor/react";

export function SliderHsbaChannels() {
  return (
    <ColorPicker.Root>
      <ColorPicker.View format="hsba">
        <div className="flex w-full flex-col gap-2">
          <ColorPicker.ChannelSlider channel="hue">
            <ColorPicker.ChannelSliderTrack />
            <ColorPicker.ChannelSliderThumb />
          </ColorPicker.ChannelSlider>
          <ColorPicker.ChannelSlider channel="saturation">
            <ColorPicker.ChannelSliderTrack />
            <ColorPicker.ChannelSliderThumb />
          </ColorPicker.ChannelSlider>
          <ColorPicker.ChannelSlider channel="brightness">
            <ColorPicker.ChannelSliderTrack />
            <ColorPicker.ChannelSliderThumb />
          </ColorPicker.ChannelSlider>
        </div>
      </ColorPicker.View>
    </ColorPicker.Root>
  );
}
