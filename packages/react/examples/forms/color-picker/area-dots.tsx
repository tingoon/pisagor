import { ColorPicker } from "@pisagor/react";

export function AreaDots() {
  return (
    <ColorPicker.Root>
      <ColorPicker.Area showDots xChannel="hue" yChannel="alpha">
        <ColorPicker.AreaBackground />
        <ColorPicker.AreaThumb />
      </ColorPicker.Area>
    </ColorPicker.Root>
  );
}
