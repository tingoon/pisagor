import { CircularSlider } from "@pisagor/react/circular-slider";

export function CustomMarkers() {
  return (
    <CircularSlider
      aria-label="Angle"
      defaultValue={45}
      markers={[0, 90, 180, 270]}
    />
  );
}
