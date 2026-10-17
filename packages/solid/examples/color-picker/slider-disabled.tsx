import source from "./slider-disabled.tsx?raw";
import { ColorPicker } from "@pisagor/solid";

export function SliderDisabled() {
  return (
    <ColorPicker>
      <ColorPicker.View format="hsla">
        <ColorPicker.ChannelSlider channel="hue" />
      </ColorPicker.View>
    </ColorPicker>
  );
}

export { source as SliderDisabledSource };
