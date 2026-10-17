import source from "./invalid.tsx?raw";
import { CheckboxField } from "@pisagor/solid-form";

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

export { source as InvalidSource };
