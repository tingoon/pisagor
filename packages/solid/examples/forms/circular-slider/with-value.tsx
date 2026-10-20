import { ThermometerIcon } from "@squidlab/phosphor-solid/icons";
import { CircularSlider } from "@pisagor/solid";

export function WithValue() {
  return (
    <CircularSlider
      showValue
      valuePrefix={<ThermometerIcon class="size-4" />}
      valueSuffix="°"
    />
  );
}
