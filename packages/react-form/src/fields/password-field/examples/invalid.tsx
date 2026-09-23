import { PasswordField } from "..";

export function Invalid() {
  return (
    <PasswordField
      autoComplete="new-password"
      error="Password must be at least 8 characters."
      id="password-field-invalid"
      invalid
      label="Password"
      placeholder="Enter your password"
      value="short"
    />
  );
}
