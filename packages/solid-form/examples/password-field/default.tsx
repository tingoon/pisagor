import { PasswordField } from "@pisagor/solid-form";

export function Default() {
  return (
    <PasswordField
      autocomplete="new-password"
      description="At least 8 characters, including a number."
      id="password-field-new"
      label="New password"
      placeholder="Create a password"
    />
  );
}
