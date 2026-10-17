import source from "./area-dots.tsx?raw";
import { ColorPicker } from "@pisagor/react";

export function AreaDots() {
  return (
    <ColorPicker>
      <ColorPicker.Area showDots xChannel="hue" yChannel="alpha">
        <ColorPicker.AreaThumb />
      </ColorPicker.Area>
    </ColorPicker>
  );
}

export { source as AreaDotsSource };
