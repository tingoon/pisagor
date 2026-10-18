import { CircularSlider } from "@pisagor/solid";
import { ThermometerIcon } from "@pisagor/solid/icons";

export function WithValue() {
  return (
    <CircularSlider>
      <CircularSlider.ValueText
        prefix={<ThermometerIcon class="size-4" />}
        suffix="°"
      />
    </CircularSlider>
  );
}
