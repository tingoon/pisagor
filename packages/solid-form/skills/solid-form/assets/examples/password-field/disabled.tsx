/** @jsxImportSource solid-js */
import { PasswordField } from "@pisagor/solid-form";

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
