import source from "./slider-rgb-channels.tsx?raw";
import { ColorPicker } from "@pisagor/react";

export function SliderRgbChannels() {
  return (
    <ColorPicker>
      <ColorPicker.View format="rgba">
        <div className="flex w-full flex-col gap-2">
          <ColorPicker.ChannelSlider channel="red" />
          <ColorPicker.ChannelSlider channel="green" />
          <ColorPicker.ChannelSlider channel="blue" />
        </div>
      </ColorPicker.View>
    </ColorPicker>
  );
}

export { source as SliderRgbChannelsSource };
