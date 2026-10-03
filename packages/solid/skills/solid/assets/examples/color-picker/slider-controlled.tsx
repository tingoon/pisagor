/** @jsxImportSource solid-js */

import { ColorPicker } from "@pisagor/solid/color-picker";
import { createSignal } from "solid-js";
export function SliderControlled() {
  const [color, setColor] = createSignal("rgba(82, 65, 235, 1)");

  return (
    <div class="flex flex-col gap-2">
      <ColorPicker
        class="w-full"
        format="hsla"
        inline
        onValueChange={setColor}
        value={color()}
      >
        <ColorPicker.View format="hsla">
          <ColorPicker.ChannelSlider channel="hue" />
        </ColorPicker.View>
      </ColorPicker>
      <p class="text-center text-muted-foreground text-sm">{color()}</p>
    </div>
  );
}
