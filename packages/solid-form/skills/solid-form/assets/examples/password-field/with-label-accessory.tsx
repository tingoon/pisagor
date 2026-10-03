/** @jsxImportSource solid-js */
import { PasswordField } from "@pisagor/solid-form";

export function WithLabelAccessory() {
  return (
    <PasswordField
      autoComplete="current-password"
      id="password-field-accessory"
      label="Password"
      labelAccessory={
        <a
          class="ml-auto text-sm underline-offset-4 hover:underline"
          href="https://example.com/forgot-password"
        >
          Forgot password?
        </a>
      }
      labelProps={{
        class: "w-full",
      }}
      placeholder="Enter your password"
    />
  );
}
