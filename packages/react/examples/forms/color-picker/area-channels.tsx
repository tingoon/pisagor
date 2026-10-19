import { ColorPicker } from "@pisagor/react";

export function AreaChannels() {
  return (
    <ColorPicker.Root>
      <ColorPicker.Area xChannel="hue" yChannel="alpha">
        <ColorPicker.AreaBackground />
        <ColorPicker.AreaThumb />
      </ColorPicker.Area>
    </ColorPicker.Root>
  );
}
