import { planOptions } from "../../../examples/options";
import { RadioGroupField } from "..";

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
