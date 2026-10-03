import { CheckboxField } from "../../../../../src/fields/checkbox-field";

export function Disabled() {
  return (
    <CheckboxField
      disabled
      id="checkbox-field-terms-disabled"
      label="I accept the terms and conditions"
    />
  );
}
