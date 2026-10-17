import source from "./with-value.tsx?raw";
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

export { source as WithValueSource };
