import { PasswordField } from "../../src/fields/password-field";

export function Disabled() {
  return (
    <PasswordField
      autoComplete="current-password"
      disabled
      id="password-field-disabled"
      label="Password"
      placeholder="Enter your password"
    />
  );
}
