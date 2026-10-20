import { ColorPicker } from "@pisagor/react";
import { useState } from "react";

export function SliderControlled() {
  const [color, setColor] = useState("rgba(82, 65, 235, 1)");

  return (
    <div className="flex flex-col gap-2">
      <ColorPicker.Root
        className="w-full"
        format="hsla"
        inline
        onValueChange={setColor}
        value={color}
      >
        <ColorPicker.View format="hsla">
          <ColorPicker.ChannelSlider channel="hue">
            <ColorPicker.ChannelSliderTrack />
            <ColorPicker.ChannelSliderThumb />
          </ColorPicker.ChannelSlider>
        </ColorPicker.View>
      </ColorPicker.Root>
      <p className="text-muted-foreground text-center text-sm">{color}</p>
    </div>
  );
}
