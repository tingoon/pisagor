import source from "./invalid.tsx?raw";
import { RadioGroupField } from "@pisagor/solid-form";
import { planOptions } from "../options";

export function Invalid() {
  return (
    <RadioGroupField
      error="Please select a plan."
      id="radio-group-field-plan-invalid"
      invalid
      label="Plan"
      options={planOptions}
    />
  );
}

export { source as InvalidSource };
