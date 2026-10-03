/** @jsxImportSource solid-js */
import { SwitchField } from "@pisagor/solid-form";

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
