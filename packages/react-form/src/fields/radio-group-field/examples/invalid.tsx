import { planOptions } from "../../../examples/options";
import { RadioGroupField } from "..";

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
