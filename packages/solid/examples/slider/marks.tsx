import { Slider } from "@pisagor/solid";

export function Marks() {
  return <Slider defaultValue={[5]} markerInterval={2} max={12} showMarkers />;
}
