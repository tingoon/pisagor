import { CircularSlider } from "..";

export function Step() {
  return (
    <CircularSlider
      aria-label="Angle"
      defaultValue={120}
      markers
      markersAtSteps
      step={60}
    />
  );
}
