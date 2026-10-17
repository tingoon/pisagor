import { Slider } from "@pisagor/react";

export function Marks() {
  return <Slider defaultValue={[5]} markerInterval={2} max={12} showMarkers />;
}
