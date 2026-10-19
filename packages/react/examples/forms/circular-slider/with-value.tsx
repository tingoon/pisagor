import { ThermometerIcon } from "@phosphor-icons/react";
import { CircularSlider } from "@pisagor/react";

export function WithValue() {
  return (
    <CircularSlider
      showValue
      valuePrefix={<ThermometerIcon className="size-4" />}
      valueSuffix="°"
    />
  );
}
