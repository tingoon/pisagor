/** @jsxImportSource solid-js */
import { ColorPicker } from "@pisagor/solid/color-picker";

export function AreaDots() {
  return (
    <ColorPicker>
      <ColorPicker.Area showDots xChannel="hue" yChannel="alpha">
        <ColorPicker.AreaThumb />
      </ColorPicker.Area>
    </ColorPicker>
  );
}
