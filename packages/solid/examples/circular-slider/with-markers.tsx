import source from "./with-markers.tsx?raw";
import { CircularSlider } from "@pisagor/solid";

export function WithMarkers() {
  return <CircularSlider aria-label="Angle" defaultValue={45} markers />;
}

export { source as WithMarkersSource };
