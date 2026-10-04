/** @jsxImportSource solid-js */
import { ColorPicker } from "@pisagor/solid";

export function AreaChannels() {
  return (
    <ColorPicker>
      <ColorPicker.Area xChannel="hue" yChannel="alpha">
        <ColorPicker.AreaThumb />
      </ColorPicker.Area>
    </ColorPicker>
  );
}
