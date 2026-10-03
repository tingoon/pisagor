import { SwitchField } from "../../../../../src/fields/switch-field";

export function Invalid() {
  return (
    <SwitchField
      error="You must enable notifications to continue."
      id="switch-field-notifications-invalid"
      invalid
      label="Enable notifications"
    />
  );
}
