import source from "./slider-hsba-channels.tsx?raw";
import { ColorPicker } from "@pisagor/react";

export function SliderHsbaChannels() {
  return (
    <ColorPicker>
      <ColorPicker.View format="hsba">
        <div className="flex w-full flex-col gap-2">
          <ColorPicker.ChannelSlider channel="hue" />
          <ColorPicker.ChannelSlider channel="saturation" />
          <ColorPicker.ChannelSlider channel="brightness" />
        </div>
      </ColorPicker.View>
    </ColorPicker>
  );
}

export { source as SliderHsbaChannelsSource };
