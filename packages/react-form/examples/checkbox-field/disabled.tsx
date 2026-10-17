import source from "./disabled.tsx?raw";
import { CheckboxField } from "@pisagor/react-form";

export function Disabled() {
  return (
    <CheckboxField
      disabled
      id="checkbox-field-terms-disabled"
      label="I accept the terms and conditions"
    />
  );
}

export { source as DisabledSource };
