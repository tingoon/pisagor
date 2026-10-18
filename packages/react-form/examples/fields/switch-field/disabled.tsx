import { SwitchField } from "@pisagor/react-form";

export function Disabled() {
  return (
    <SwitchField
      description="Get release updates by email."
      disabled
      id="switch-field-notifications-disabled"
      label="Enable notifications"
    />
  );
}
