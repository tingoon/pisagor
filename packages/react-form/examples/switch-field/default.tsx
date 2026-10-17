import { SwitchField } from "@pisagor/react-form";

export function Default() {
  return (
    <SwitchField
      description="Ask for a code from your authenticator app at sign-in."
      id="switch-field-two-factor"
      label="Two-factor authentication"
    />
  );
}
