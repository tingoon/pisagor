import { RadioGroupField } from "../../../../../src/fields/radio-group-field";
import { planOptions } from "../options";

export function Disabled() {
  return (
    <RadioGroupField
      description="You can change this anytime in billing settings."
      disabled
      id="radio-group-field-plan-disabled"
      label="Plan"
      options={planOptions}
    />
  );
}
