import { CheckboxField } from "../../../../../src/fields/checkbox-field";

export function Invalid() {
  return (
    <CheckboxField
      error="You must accept the terms to continue."
      id="checkbox-field-terms-invalid"
      invalid
      label="I accept the terms and conditions"
    />
  );
}
