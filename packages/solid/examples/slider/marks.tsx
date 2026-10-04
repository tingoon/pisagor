/** @jsxImportSource solid-js */
import { Slider } from "@pisagor/solid/slider";

export function Marks() {
  return <Slider defaultValue={[5]} markerInterval={2} max={12} showMarkers />;
}
