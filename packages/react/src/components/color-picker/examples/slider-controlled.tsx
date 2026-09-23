import { useState } from "react";
import { ColorPicker } from "..";

export function SliderControlled() {
  const [color, setColor] = useState("rgba(82, 65, 235, 1)");

  return (
    <div className="flex flex-col gap-2">
      <ColorPicker className="w-full" format="hsla" inline onValueChange={setColor} value={color}>
        <ColorPicker.View format="hsla">
          <ColorPicker.ChannelSlider channel="hue" />
        </ColorPicker.View>
      </ColorPicker>
      <p className="text-center text-muted-foreground text-sm">{color}</p>
    </div>
  );
}
