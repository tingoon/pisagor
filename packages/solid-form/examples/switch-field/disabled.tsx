import source from "./disabled.tsx?raw";
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

export { source as DisabledSource };
