import { SliderField } from "..";

export function Disabled() {
  return (
    <SliderField
      defaultValue={[40]}
      disabled
      id="slider-field-opacity-disabled"
      label="Opacity"
      showValue
    />
  );
}
