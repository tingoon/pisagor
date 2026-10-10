import { SliderField } from "@pisagor/react-form";

export function Default() {
  return (
    <SliderField
      defaultValue={[70]}
      description="Applies to all notification sounds."
      id="slider-field-volume"
      label="Volume"
      showValue
    />
  );
}
