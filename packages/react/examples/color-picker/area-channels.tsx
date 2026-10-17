import source from "./area-channels.tsx?raw";
import { ColorPicker } from "@pisagor/react";

export function AreaChannels() {
  return (
    <ColorPicker>
      <ColorPicker.Area xChannel="hue" yChannel="alpha">
        <ColorPicker.AreaThumb />
      </ColorPicker.Area>
    </ColorPicker>
  );
}

export { source as AreaChannelsSource };
