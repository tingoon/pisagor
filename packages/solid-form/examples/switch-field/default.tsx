import { SwitchField } from "@pisagor/solid-form";

export function Default() {
  return (
    <SwitchField
      description="Ask for a code from your authenticator app at sign-in."
      id="switch-field-two-factor"
      label="Two-factor authentication"
    />
  );
}
