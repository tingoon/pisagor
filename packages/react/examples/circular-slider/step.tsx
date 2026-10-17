import source from "./step.tsx?raw";
import { CircularSlider } from "@pisagor/react";

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

export { source as StepSource };
