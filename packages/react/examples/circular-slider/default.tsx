import source from "./default.tsx?raw";
import { CircularSlider } from "@pisagor/react";

export function Default() {
  return (
    <CircularSlider>
      <CircularSlider.ValueText suffix="°" />
    </CircularSlider>
  );
}

export { source as DefaultSource };
