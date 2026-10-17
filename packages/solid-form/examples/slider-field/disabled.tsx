import source from "./disabled.tsx?raw";
import { SliderField } from "@pisagor/solid-form";

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

export { source as DisabledSource };
