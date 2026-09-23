import { SwitchField } from "..";

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
