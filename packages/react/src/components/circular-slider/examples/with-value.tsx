import { ThermometerIcon } from "@phosphor-icons/react";
import { CircularSlider } from "..";

export function WithValue() {
  return (
    <CircularSlider>
      <CircularSlider.ValueText prefix={<ThermometerIcon className="size-4" />} suffix="°" />
    </CircularSlider>
  );
}
