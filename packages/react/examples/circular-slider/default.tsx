import { CircularSlider } from "@pisagor/react/circular-slider";

export function Default() {
  return (
    <CircularSlider>
      <CircularSlider.ValueText suffix="°" />
    </CircularSlider>
  );
}
