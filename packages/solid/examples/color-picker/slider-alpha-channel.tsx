import source from "./slider-alpha-channel.tsx?raw";
import { ColorPicker } from "@pisagor/solid";

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

export { source as SliderAlphaChannelSource };
