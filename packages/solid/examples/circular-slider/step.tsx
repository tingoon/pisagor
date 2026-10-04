/** @jsxImportSource solid-js */
import { CircularSlider } from "@pisagor/solid";

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
