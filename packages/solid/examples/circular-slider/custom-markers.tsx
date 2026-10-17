import source from "./custom-markers.tsx?raw";
import { CircularSlider } from "@pisagor/solid";

export function CustomMarkers() {
  return (
    <CircularSlider
      aria-label="Angle"
      defaultValue={45}
      markers={[0, 90, 180, 270]}
    />
  );
}

export { source as CustomMarkersSource };
