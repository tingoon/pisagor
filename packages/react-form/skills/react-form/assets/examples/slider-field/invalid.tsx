import { SliderField } from "../../../../../src/fields/slider-field";

export function Invalid() {
  return (
    <SliderField
      defaultValue={[10]}
      error="Value is too low."
      id="slider-field-opacity-invalid"
      invalid
      label="Opacity"
      showValue
    />
  );
}
