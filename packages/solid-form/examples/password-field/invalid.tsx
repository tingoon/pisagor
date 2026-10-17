import { PasswordField } from "@pisagor/solid-form";

export function Invalid() {
  return (
    <PasswordField
      autocomplete="new-password"
      error="Password must be at least 8 characters."
      id="password-field-invalid"
      invalid
      label="Password"
      placeholder="Enter your password"
      value="short"
    />
  );
}
